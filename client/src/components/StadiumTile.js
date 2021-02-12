import React from 'react'
import { Link } from "react-router-dom"

const StadiumTile = ({ stadium }) => {
  return (
    <div className="cell">
      <Link to={`/stadiums/${stadium.id}`}>
        <div className="card" id='stadium-card'>
          <div className="card-section">
              <h4>
                {stadium.name}
              </h4>
              <h5>
                {stadium.city}
              </h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default StadiumTile