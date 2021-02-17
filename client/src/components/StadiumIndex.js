import React, { useState, useEffect } from 'react' 

import StadiumTile from './StadiumTile.js'

const StadiumIndex = props => {
  const [stadiums, setStadiums] = useState([])

  const getStadiums = async () => {
    try {
      const response = await fetch('/api/v1/stadiums')
      if(!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const body = await response.json()
      setStadiums(body.stadiums)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getStadiums()
  }, [])

  const stadiumTiles = stadiums.map(stadiumObject => {
    return (
      <StadiumTile
      key={ stadiumObject.id }
      stadium={ stadiumObject }
      />
    )
  })

  return (
    <div className='grid-container text-center' id='stadium'>
      <h1>MLB Stadiums</h1>
      <div className="grid-x grid-margin-x small-up-1 medium-up-3 large-up-4">
        {stadiumTiles}
      </div>
    </div>
  )
}

export default StadiumIndex