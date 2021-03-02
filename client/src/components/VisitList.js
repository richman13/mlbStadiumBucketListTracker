import React from 'react' 
import VisitTile from './VisitTile'

const VisitList = (props) => {
  debugger
  const visitTiles = visits.map(visit => {
    return(
      <VisitTile
        key={visit.id}
        visit={visit}
        patchVisit={patchVisit}
        errors={errors}
        user={user}
        visitDelete={visitDelete}
        />
    )
  })

  return(
    <div className="callout grid-container text-center grid-margin-y grid-y">
      <h3>Visits</h3>
      {visitTiles}
    </div>
  )
}

export default VisitList