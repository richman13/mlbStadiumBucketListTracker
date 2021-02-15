import React, { useState, useEffect } from 'react' 
import { Link } from 'react-router-dom'
import VisitTile from './VisitTile.js'
import NewVisitForm from './NewVisitForm.js'

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

  const addVisit = async (visit) => {
    try {
      const response = await fetch(`/api/v1/stadiums/${id}/visits`, {
        method: 'POST',
        headers: new Headers({
          'Content-type': 'application/json'
        }),
        body: JSON.stringify({ ...visit, userId: user.id })
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
debugger
  // const visitTiles = stadium.visits.map((visit) => {
  //   return (
  //     <VisitTile 
  //     key={visit.id}
  //     visit={visit}
  //     />
  //   )
  // })

  return (
    <div className='grid-container text-center' id='stadium-show' >
      <div className='showpage-content'>
        <h1>{stadium.name}</h1>
        <div className="grid-x grid-margin-x small-up-2 medium-up-3">
          {/* {visitTiles} */}
          placeholder for visits
        </div>
        <div className='grid-x grid-margin-x'>
          <div className="small-4 small-offset-4" id='new-visit-form-card'>
            <Link to={`/stadiums/${stadiumId}/visits/new`}>
              <div className="new-product-link-content">
                <p>{NewVisitForm}</p>
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