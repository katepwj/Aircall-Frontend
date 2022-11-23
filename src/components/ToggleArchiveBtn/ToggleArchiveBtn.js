import React from 'react'
import { RiInboxUnarchiveFill } from 'react-icons/ri';
import { RiInboxArchiveFill } from 'react-icons/ri';

const ToggleArchiveBtn = (props) => {
  const { list, type, toggleArchive } = props

  const handleArchive = () => {
    toggleArchive()
  }

  // generate button icon(archive/unarchive)
  const btnIcon = (
    type === "archive"
      ?
      <RiInboxArchiveFill />
      :
      <RiInboxUnarchiveFill />
  )



  // generate button text(archive/unarchive)
  const btnText = (type === "archive"
    ?
    "Archive all calls"
    :
    "Unarchive all calls")
 return (
    <div>
      {/* show archive/unarchive all button */}
      {
        list.length > 0
        &&
        <button
          onClick={handleArchive}
          className="archiveBtn"
        >
          <i className="archiveIcon">
            {btnIcon}
          </i>
          {btnText}
        </button>
      }

    </div>
  )
}

export default ToggleArchiveBtn
