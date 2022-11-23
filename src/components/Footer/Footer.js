import React from 'react'
import './Footer.css'
import { AiOutlineUser, AiOutlineSetting } from 'react-icons/ai'
import { GrPhone } from 'react-icons/gr'



const Footer = () => {
  return (
    <div className="footer">


      <i>
        <GrPhone />
      </i>
      <i>
        <AiOutlineUser />
      </i>
      <i>
        <AiOutlineSetting />
      </i>
    </div>
  )
}

export default Footer
