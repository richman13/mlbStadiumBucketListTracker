import React from 'react'

const VisitTile = ({visit}) => {
  return(
    <div className="callout visit-tile">
      <div className="grid-x">
        <h5> 
          Visited On: {visit.date || 'Date unknown'}  
        </h5>
        <p className="cell small-12">
          Ballpark Rating: {visit.ballparkRating}
        </p>
      </div>
      <p>{visit.gameNotes}</p>
    </div>
  )
}

export default VisitTile