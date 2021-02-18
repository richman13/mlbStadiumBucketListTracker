import React from 'react' 
import { Link } from 'react-router-dom' 

const LandingPage = (props) => {
  return (
    <div className="landing-page">
      <div className="grid-container text-center grid-margin-y grid-y">
        <div className="cell">
          <h2> <strong>MLB Ballpark Visit Tracker</strong></h2>
            <h3>Keep track of all your MLB ballpark visits!</h3>
        </div>
        <div className="cell">
          <h4>
            <Link className="landing-page-link" to="/stadiums">Visit Stadiums</Link>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default LandingPage