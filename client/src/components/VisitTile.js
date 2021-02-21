import React from 'react'

const VisitTile = (props) => {
  let showVisit = true
  if (props.visit.userId != props.userId || props.userId == undefined) {
    showVisit = false
  }
  return(
    <div>
      {showVisit && 
    <div className="callout visit-tile">
      <div className="grid-x">
        <h5> 
          Visited On: {props.visit.date || 'Date unknown'}  
        </h5>
        <p className="cell small-12">
          Ballpark Rating: {props.visit.ballparkRating}
        </p>
      </div>
      <p>{props.visit.gameNotes}</p>
    </div>
      }
    </div>
  )
}

export default VisitTile