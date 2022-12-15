import React, { useState, useEffect } from "react";
import { fetchCalls} from '../../api/index'
import './Activity.css'
import Calls from "../../components/Calls/Calls";
import ActivityTabs from "../../components/ActivityTabs/ActivityTabs";
// import ToggleArchiveBtn from "../../components/ToggleArchiveBtn/ToggleArchiveBtn";

const Activity = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [requestType, setRequestType] = useState("all")
  const [activityCalls, setActivityCalls] = useState([])
  const [filteredCalls, setFilteredCalls] = useState([])
  const [loading, setLoading] = useState(false)


  // to record the index for the tab clicked by the client
  const setIndexAndType = (index, type) => {
    setActiveIndex(index)
    setRequestType(type)
  }


  // fetch all calls without archived calls function
  const fetchActivityFunc = async () => {
    setLoading(true)
    try {
      const res = await fetchCalls()
      // to exclude the archived calls from response
      const updatedRes = res.data.filter(item =>
        item.is_archived !== true
      )
      setActivityCalls(updatedRes)
      setFilteredCalls(updatedRes)
    } catch (err) {
      alert(err)
      console.log(err)
    }
    setLoading(false)
  }


  // filter calls function for each sub tab under Acitivity page
  const filterCallsFunc = (type) => {
    // getl all calls exclude the archived ones 
    if (type === "all") {
      setFilteredCalls([...activityCalls])
    }
    // filter by Inbound calls 
    else if (type === "inbound") {
      setFilteredCalls([...activityCalls].filter(item => item.direction === "inbound"))
    }
    else {
      // filter by Missed calls
      setFilteredCalls([...activityCalls].filter(item => item.call_type === "missed"))
    }
  }

  // To fetch all calls in the Activity Feed without archived calls 
  useEffect(() => {
       fetchActivityFunc()
    return () => {
      setActivityCalls([])
    }
  }, [])

  // retrive calls for each tab without archived
  useEffect(() => {
    filterCallsFunc(requestType)
    return () => {
      setFilteredCalls([])
    }
  }, [requestType])




  return (
    <div>

      {/* show three tabs in activity page: all calls, inbox, missed */}
      <ActivityTabs
        setIndexAndType={setIndexAndType}
        activeIndex={activeIndex}
      />

      {/* show call list */}
      <Calls
        loading={loading}
        list={filteredCalls}
        requestType={requestType}
      />
    </div>
  )
}

export default Activity

