import React, { useState, useEffect } from 'react'
import './Detail.css'
import { fetchCall, updateCall } from '../../api/index'
// BiArrowBack
import { BiArrowBack } from 'react-icons/bi';
import { getFullTime } from '../../utils/getTimeMethod'


const Detail = (props) => {
  const { id } = props.match.params
  const [callDetails, setCallDetails] = useState({})
  const [loading, setLoading] = useState(false)


  // retrieve a specific call details function
  const fetchDetail = async (id) => {
    setLoading(true)
    try {
      const res = await fetchCall(id)
      setLoading(false)
      setCallDetails(res.data)

    } catch (err) {
      setLoading(false)
      alert(err)
      console.log(err)
    }
  }


  // retrieve a specific call details 
  useEffect(() => {
    fetchDetail(id)
    return () => {
      setCallDetails({})
    }
  }, [id])


  // user to archive or unarchive a call
  const toggleArchive = async (id, status) => {
    console.log(status)
    try {
      const res = await updateCall(id, status)
      alert("Updated succesfully")
      fetchDetail(id)
    } catch (err) {
      alert(err)
      console.log(err)
    }
  }

  return (
    <div className="detailContainer">

      <div className="detailHeadline">
        <i
          onClick={() => window.history.back()}
          className="goBackIcon">
          <BiArrowBack />
        </i>
        <h1>Call Details</h1>
      </div>

      {
        loading ? "Loading..." : (
          <div>
            <ul>
              <li className="detailLine">
                <p className="detailTitle">From</p>
                <p>{callDetails.from}</p>
              </li>
              <li className="detailLine">
                <p className="detailTitle">To</p>
                <p>{callDetails.to}</p>
              </li>
              <li className="detailLine">
                <p className="detailTitle">Date</p>
                <p>{getFullTime(callDetails.created_at)}</p>
              </li>
              <li className="detailLine">
                <p className="detailTitle">duration</p>
                <p>{callDetails.duration}</p>
              </li>
              <li className="detailLine">
                <p className="detailTitle">direction</p>
                <p>{callDetails.direction}</p>
              </li>
              <li className="detailLine">
                <p className="detailTitle">via</p>
                <p>{callDetails.via}</p>
              </li>
              <li className="detailLine">
                <p className="detailTitle">Status</p>
                <p>{callDetails.call_type}</p>
              </li>
              <li className="detailLine">
                <p className="detailTitle">Archived</p>
                <p>{callDetails.is_archived ? "Yes" : "No"}</p>
              </li>
            </ul>

            <button
              onClick={() => toggleArchive(id, !callDetails.is_archived)}
              className="archiveDetailBtn">
              {callDetails.is_archived ?
                "Unarchive this call" :
                "Archive this call"}
            </button>
          </div>
        )
      }

    </div>
  )
}

export default Detail
