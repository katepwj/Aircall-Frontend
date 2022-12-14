import React, { useState, useEffect } from "react";
import { fetchCalls, resetCalls } from '../../api/index'
import Calls from '../../components/Calls/Calls';
import ToggleArchiveBtn from '../../components/ToggleArchiveBtn/ToggleArchiveBtn';
import './Archived.css'


const Archived = () => {
  const [archivedCalls, setArchivedCalls] = useState([])
  const [loading, setLoading] = useState(false)

  // fetch archived calls function
  const fetchArchivedFunc = async () => {
    setLoading(true)
    try {
      const res = await fetchCalls()
    
      // to exclude the activity calls from response
      const updatedRes = res.data.filter(item =>
        item.is_archived == true
      )
      setArchivedCalls(updatedRes)
      setLoading(false)
    } catch (err) {
      alert(err)
      console.log(err)
    }
  }

  // fetch archived calls
  useEffect(() => {
    fetchArchivedFunc()
    return () => {
      setArchivedCalls([])
    }
  }, [])

  // unarchive all
  const handleUnarchiveAll = async () => {
    setLoading(true)
    try {
      const res = await resetCalls()
      alert(res.data)
      setArchivedCalls([])

    } catch (err) {
      alert(err)
      console.log(err)
    }
    setLoading(false)
  }

  return (
    <div>
      {/* show unarchive all button */}
      <ToggleArchiveBtn
        type="unarchive"
        list={archivedCalls}
        toggleArchive={handleUnarchiveAll}
      />

      {/* show call list */}
      < Calls
        loading={loading}
        list={archivedCalls}
      />
    </div>
  )
}

export default Archived
