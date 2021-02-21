import React, { useState, useEffect } from 'react' 
import translateServerErrors from '../services/translateServerErrors'
import VisitList from './VisitList.js'
import VisitTile from './VisitTile.js'
import NewVisitForm from './NewVisitForm.js'
import { withRouter } from 'react-router-dom'

const StadiumShowPage = (props) => {
  const [stadium, setStadium] = useState({
   id: "",
   name: "",
   city: "",
   homeTeam: "",
   capacity: ""
  })
  const [visits, setVisits] = useState([])
  const [errors, setErrors] = useState({})

  const stadiumId = props.match.params.id

  let userId;
  if (props.user == undefined) {
    userId = 0
  } else {
    userId = props.user.id;
  }

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

      setVisits(body.stadium.visits)
    } catch(error){
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const addVisit = async (visit) => {
    try {
      const response = await fetch(`/api/v1/visits`, {
        method: 'POST',
        headers: new Headers({
          'Content-type': 'application/json'
        }),
        body: JSON.stringify({ visit: visit, stadium: stadium, userId: userId })
      })
      if(!response.ok) {
        if(response.status === 422) {
          const body = await response.json()
          const errors = translateServerErrors(body.errors)
          setErrors(errors)
          return false
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          throw new Error(errorMessage)
        }
      } else {
        const body = await response.json()
        setVisits([
          ...visits,
          body.visit
        ])
        setErrors({})
        return true
      }
    } catch(error) {
      console.error(`Error in fetch ${error.message}`)
    }
  }

  useEffect(() => {
    getStadium()
  }, [])

  const visitTiles = visits.map((visit) => {
    return (
      <VisitTile 
      key={visit.id}
      visit={visit}
      userId={userId}
      />
    )
  })
/*   <VisitList 
  visits={visits}
  errors={errors}
/> */

  return (
    <div className='grid-container text-center' id='stadium-show' >
      <div className='showpage-content'>
        <h1>{stadium.name}</h1>
        <div className='grid-x grid-margin-x'>
          <div className="cell small-12 medium-8">
          {visitTiles}
           <div className="small-4 small-offset-6" id='new-visit-form-card'>
            <h4>{`Add a visit to ${stadium.name}`}</h4>
              <div className="cell small-12 medium-4">
                <NewVisitForm
                  addVisit={addVisit}
                  errors={errors}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(StadiumShowPage)