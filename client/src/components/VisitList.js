import React from 'react' 
import VisitTile from './VisitTile'

const VisitList = ({visits, user, errors}) => {
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
    <div className="callout visit-tile-container">
      <h3>Visits</h3>
      {visitTiles}
    </div>
  )
}

export default VisitList