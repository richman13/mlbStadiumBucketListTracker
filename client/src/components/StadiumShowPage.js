import React, { useState, useEffect } from 'react' 

import VisitTile from './VisitTile.js'

const StadiumShowPage = props => {
  const [stadium, setStadium] = useState({
   id: "",
   name: "",
   city: "",
   homeTeam: "",
   capacity: ""
  })

  const stadiumId = props.match.params.id

  const getStadium = async () => {
    try {
      const response = await fetch(`/api/v1/stadiums/${stadiumId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw (error)
      }
      const body = await response.json()
      setStadium(body.stadium)
    } catch(error){
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getStadium()
  }, [])

  const visitTiles = stadium.visits.map((stadium) => {
    return (
      <VisitTile 
      key={visit.id}
      visit={visit}
      />
    )
  })

  return (
    <div className='grid-container text-center' id='stadium-show' >
      <div className='showpage-content'>
        <h1>{stadium.name}</h1>
        <div className="grid-x grid-margin-x small-up-2 medium-up-3">
          {visitTiles}
        </div>
        <div className='grid-x grid-margin-x'>
          <div className="small-4 small-offset-4" id='new-visit-form-card'>
            <Link to={`/stadiums/${stadiumId}/visits/new`}>
              <div className="new-product-link-content">
                <h4>{`Add a visit to ${stadiumId}`}</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )

}

export default StadiumShowPage