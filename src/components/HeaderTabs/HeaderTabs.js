import React, { useState } from 'react'
import {
  NavLink
} from "react-router-dom";
const HeaderTabs = () => {
  const [activeIndex, setactiveIndex] = useState(0)
  const titleClass = (index) => {
    return (activeIndex == index ? "navLink active" : "navLink")
  }
  return (
    <div className="headerTabs">
      <NavLink
        // to="/activity"
        exact 
        to="/"
        className={titleClass(0)}
        onClick={() => setactiveIndex(0)}
      >
        <h2 className="headerTab">
          Activity
        </h2>
      </NavLink>
      <NavLink
        to="/archived"
        className={titleClass(1)}
        onClick={() => setactiveIndex(1)}
      >
        <h2 className="headerTab">
          Archived
        </h2>
      </NavLink>
    </div>
  )
}

export default HeaderTabs
