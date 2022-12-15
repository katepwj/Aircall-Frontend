import React from 'react'
import './Call.css'
import { FiPhoneIncoming, FiPhoneMissed, FiPhoneCall, FiVoicemail } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { getTime, getDate } from '../../utils/getTimeMethod';
const Call = (props) => {
  const { item } = props

  // generate phone icons according to call type
  const phoneIcon = (callType) => {
    if (callType === "missed") {
      return <i style={{ color: "var(--red-color)" }}>
        <FiPhoneMissed />
      </i>
    } else if (callType === "answered") {
      return <i style={{ color: " green" }}>
        <FiPhoneIncoming />
      </i>
    }
    else if (callType === "voicemail") {
      return <i style={{ color: " blue" }}>
        <FiVoicemail />
      </i>
    }
    else {
      return <i><FiPhoneCall /></i>
    }
  }

  return (
    <Link to={`/detail/${item.id}`} className="callContainer">


      {/* phone created_at date */}
      <div className="box">
        <span className="line"></span>
        <span className="text">{getDate(item.created_at)}</span>
        <span className="line"></span>
      </div>

      {/* call_type icon */}
      <div className="callBox">
        {phoneIcon(item.call_type)}

        {/* show phone call details */}
        <div className="callDetails">
          <h3>{item.from}</h3>
          <h5 className="callVia">{item.via}</h5>
        </div>

        {/* phone created_at specific time*/}
        <div className="callTime">
          <p>{getTime(item.created_at)}</p>
        </div>
      </div>

    </Link>
  )
}

export default Call
