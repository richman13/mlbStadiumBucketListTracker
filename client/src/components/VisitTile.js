import React from 'react'

const VisitTile = ({visit}) => {
  return(
    <div className="callout">
      <h4> {visit.date} </h4>
    </div>
  )
}

export default VisitTile