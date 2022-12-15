import React from 'react'
import Call from '../Call/Call'
import "./Calls.css"

const Calls = (props) => {
  const { list, loading } = props


  const noCallsMsg = (<h3 style={{ color: "var(--red-color)" }}>
    You don't have any calls in this category!
  </h3>)

  return (
    <div>
      {/* show list*/}
      <ul className="listContainer">
        {loading ?
          "Loading...." :
          list.length === 0
            ?
            noCallsMsg
            :
            list.map((item, index) => {
              return (
                <li key={index}>
                  <Call
                    item={item} />
                </li>
              )
            })
        }
      </ul>
    </div>
  )
}

export default Calls
