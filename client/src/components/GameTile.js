import React from 'react' 
import _ from 'lodash' 

const GameTile = (gameData) => {
  debugger
  if(!_.isEmpty(gameData)) {
    return (
      <div>
        <p>Date: {gameData.DateTime}</p>
        <p>Home team: {gameData.HomeTeam}</p>
        <p>Away team: {gameData.AwayTeam}</p>
      </div>
    )
  } else {
    return ''
  }
}

export default GameTile