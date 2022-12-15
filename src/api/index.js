import axios from 'axios'

(function () {
  var cors_api_host = 'charming-bat-singlet.cyclic.app';
  var cors_api_url = 'https://' + cors_api_host + '/';
  var slice = [].slice;
  var origin = window.location.protocol + '//' + window.location.host;
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function () {
    var args = slice.call(arguments);
    var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
    if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
      targetOrigin[1] !== cors_api_host) {
      args[1] = cors_api_url + args[1];
    }
    return open.apply(this, args);
  };
})();

const API = axios.create({ baseURL: "https://cerulean-marlin-wig.cyclic.app" })


// 1.get calls to display in the Activity Feed
export const fetchCalls = () => API.get("/activities")



// 2.retrieve a specific call details
export const fetchCall = (id) => API.get(`/activities/${id}`)


// 3.update a call. The only field updatable is is_archived (bool). send a JSON in the request body:
export const updateCall = (id, status) => API.patch(`/activities/${id}`, {
  "is_archived": status
})



// 4.Reset all calls to initial state (like archived all calls).
export const resetCalls = () => API.patch("/reset")

