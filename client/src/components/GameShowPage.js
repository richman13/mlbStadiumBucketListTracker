import React, { useState, useEffect } from 'react' 
import GameTile from './GameTile.js' 

const GameShowPage = (props) => {
  const [games, setGames] = useState([])
  
  const fetchSchedule = async (props) => {
    debugger
    try {
      const season = 2021
      const response = await fetch(`api/v1/games/${season}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const gameSchedule = await response.json()
      setGames({
        date: gameSchedule.DateTime,
        homeTeam: gameSchedule.HomeTeam,
        awayTeam: gameSchedule.awayTeam,
        gameStadiumId: gameSchedule.StadiumId
      })
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchSchedule()
  }, [])
  
  return(
    <div className="container">
      <GameTile gameData={games}/>
    </div>
  )

}

export default GameShowPage