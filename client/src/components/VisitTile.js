import React, { useState } from 'react'
import EditingButtons from './EditingButtons'
import EditVisitForm from './EditVisitForm'

const VisitTile = (props) => {
  const { visit, userId, patchVisit, visitDelete } = props

  let showVisit = true

  if (visit.userId != userId || userId == undefined) {
    showVisit = false
  }

  const [editable, setEditable] = useState(false)

  const handleEditClick = (event) => {
    event.preventDefault()
    return setEditable(true)
  }
  const handleDeleteClick = (event) => {
    event.preventDefault()
    return visitDelete(visit.id)
  }

  let buttons; 
  if (userId == visit.userId) {
    buttons = <EditingButtons 
        handleEditClick={handleEditClick} 
        handleDeleteClick={handleDeleteClick}
      />
  }

  const updateEditable = () => {
    return setEditable(false)
  }

  if (editable) {
    return (
      <EditVisitForm 
        previousVisit={visit}
        patchVisit={patchVisit}
        updateEditable={updateEditable}
      />
    )
  }

  return(
    <div>
      {showVisit && 
    <div className="callout visit-tile">
      <div className="grid-x">
        <h5 className="cell small-12"> 
          Visited On: {visit.date.slice(0, 10)|| 'Date unknown'}  
        </h5>
        <p className="cell small-12">
          Ballpark Rating: {visit.ballparkRating}
        </p>
      </div>
      <p>{visit.gameNotes}</p>
      <div className="ed-button">
      {buttons}
      </div>
    </div>
      }
    </div>
  )
}

export default VisitTile