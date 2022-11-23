import axios from 'axios'

const  API = axios.create({ baseURL: "https://aircall-job.herokuapp.com" })

// 1.get calls to display in the Activity Feed
export const fetchCalls = () => API.get("/activities")



// 2.retrieve a specific call details
export const fetchCall = (id) => API.get(`/activities/${id}`)


// 3.update a call. The only field updatable is is_archived (bool). You'll need to send a JSON in the request body:
export const updateCall = (id, status) => API.post(`/activities/${id}`, {
  "is_archived": status
})


// 4.Reset all calls to initial state (usefull if you archived all calls).
export const resetCalls = () => API.get("/reset")

