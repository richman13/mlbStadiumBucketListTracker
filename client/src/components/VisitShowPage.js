import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { withRouter } from 'react-router-dom'
import translateServerErrors from '../services/translateServerErrors'

import NewVisitForm from './NewVisitForm.js'
import VisitList from './VisitList.js'


const VisitShowPage = ({user}) => {
  const [stadium, setStadium] = useState({})
  const [visits, setVisits] = useState([])
  const [errors, setErrors] = useState({})

  const { id } = useParams()

  const getVisit = async () => {
    try {
      const response = await fetch(`/api/v1/visits/${id}?userId=${user.id}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const body = await response.json()
      setStadium(body.stadium)
      setVisits(body.stadium.visits)
    } catch (error) {
      console.error(error)
      console.error(`Error in Fetch ${error.message}`)
    }
  }

  useEffect(() => {
    getVisit()
  }, [])

  return (
    <div className="visit-show">
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-padding-x">
          <VisitList
            visits={visits}
            user={user}
            errors={errors}
          />
        </div>
      </div>
    </div>
  )
}

export default withRouter(VisitShowPage)