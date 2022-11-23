import React from "react";



const ActivityTabs = (props) => {
  const { setIndexAndType, activeIndex } = props


  // tabs for the activity page
  const activityTabs = [
    { title: "All calls", requestType: "all" },
    { title: "Inbox", requestType: "inbound" },
    { title: "Missed", requestType: "missed" },
  ]

  // to record the index for the tab clicked by the client
  const handleClick = (index, type) => {
     setIndexAndType(index, type)
  }

  // set tab class style (active/inactive)
  const titleClass = (index) => {
    return (activeIndex == index ? "activityTab activeTab" : "activityTab")
  }

  return (
    <ul className="activityTabs">
      {activityTabs.map((item, index) => {
        return (
          <li key={index}
            onClick={() => handleClick(index, item.requestType)}
          >
            <h3 className={titleClass(index)}>
              {item.title}
            </h3>
          </li>
        )
      })}
    </ul>
  )
}

export default ActivityTabs
