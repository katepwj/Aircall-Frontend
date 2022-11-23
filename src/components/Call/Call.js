import React from 'react'
import './Call.css'
import { FiPhoneIncoming, FiPhoneMissed, FiPhoneCall } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { getTime, getDate } from '../../utils/getTimeMethod';
const Call = (props) => {
  const { item, requestType } = props



  // generate phone icons according to request type
  const phoneIcon = (requestType) => {
    if (requestType === "missed") {
      return <i style={{ color: "var(--red-color)" }}>
        <FiPhoneMissed />
      </i>
    } else if (requestType === "inbound") {
      return <i style={{ color: " blue" }}>
        <FiPhoneIncoming />
      </i>
    } else {
      return <i><FiPhoneCall /></i>
    }
  }

  return (
    <Link to={`/detail/${item.id}`} className="callContainer">

      <div className="box">
        <span className="line"></span>
        <span className="text">{getDate(item.created_at)}</span>
        <span className="line"></span>
      </div>


      <div className="callBox">
        {phoneIcon(requestType)}

        {/* show phone call details */}
        <div className="callDetails">
          <h3>{item.from}</h3>
          <h5 className="callVia">{item.via}</h5>
        </div>

        {/* phone created_at */}
        <div className="callTime">
          <p>{getTime(item.created_at)}</p>

        </div>
      </div>

    </Link>
  )
}

export default Call
