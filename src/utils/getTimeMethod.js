
// return format: Apr 19,2018
export const getDate = (time) => {
  var date = new Date(time);
  const m = date.toDateString().split(" ")[1];
  const d = date.toDateString().split(" ")[2];
  const y = date.toDateString().split(" ")[3];
  return `${m} ${d},${y}`

}

// return format: 17:38:41 PM
export const getTime = (time) => {
  var t = new Date(time).toLocaleString().split(",")[1];
  return t;
}


// return format: 4/19/2018, 5:38:41 PM
export const getFullTime = (time) => {
  var t = new Date(time).toLocaleString();
  return t;
}
