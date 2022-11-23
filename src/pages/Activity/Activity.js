import React, { useState, useEffect } from "react";
import { fetchCalls, updateCall } from '../../api/index'
import './Activity.css'
import Calls from "../../components/Calls/Calls";
import ActivityTabs from "../../components/ActivityTabs/ActivityTabs";
import ToggleArchiveBtn from "../../components/ToggleArchiveBtn/ToggleArchiveBtn";

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

  // fetch all calls without archived  function
  const fetchActivityCalls = async () => {
    setLoading(true)
    try {
      const res = await fetchCalls()
      // to exclude the archived calls from response
      const updatedRes = res.data.filter(item =>
        item.is_archived !== true
      )
      setActivityCalls(updatedRes)

    } catch (err) {
      alert(err)
      console.log(err)
    }
    setLoading(false)
  }


  // To fetch all calls in the Activity Feed without archived 
  useEffect(() => {
    fetchActivityCalls()
    return () => {
      setActivityCalls([])
    }
  }, [requestType])


  // To archive all calls
  const handleArchiveAll = () => {
    setLoading(true)
    if (requestType === "all") {
      activityCalls.map(item => {
        updateCall(item.id, true)
        setActivityCalls([])
      })
    } else {
      filteredCalls.map(item => {
        updateCall(item.id, true)
      })
      setFilteredCalls([])
    }
    alert("Archived succesfully!")
    setLoading(false)
  }

  // retrive calls for each tab without archived
  useEffect(() => {
    if (requestType === "all") {
      setFilteredCalls([...activityCalls])
    }
    // to get inbound calls 
    else if (requestType === "inbound") {
      setFilteredCalls([...activityCalls].filter(item => item.direction === "inbound"))
    }
    else {
      // to get missed calls
      setFilteredCalls([...activityCalls].filter(item => item.call_type === "missed"))
    }
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

      {/* show archive all button */}
      <ToggleArchiveBtn
        list={requestType === "all" ? activityCalls : filteredCalls}
        type="archive"
        toggleArchive={handleArchiveAll}
      />

      {/* show call list */}
      <Calls
        loading={loading}
        list={requestType === "all" ? activityCalls : filteredCalls}
        requestType={requestType}
      />
    </div>
  )
}

export default Activity

