import React from 'react' 
import VisitTile from './VisitTile'

const VisitList = ({visits, user, errors}) => {
  debugger
  const visitTiles = visits.map(visit => {
    return(
      <VisitTile
        key={visit.id}
        visit={visit}
        errors={errors}
        user={user}
        />
    )
  })

  return(
    // <div className="callout visit-tile-container">
    <div className="callout grid-container text-center grid-margin-y grid-y">
      <h3>Visits</h3>
      {visitTiles}
    </div>
  )
}

export default VisitList