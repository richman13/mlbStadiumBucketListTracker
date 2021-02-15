import React, { useState } from 'react' 

import ErrorList from './ErrorList'

const NewVisitForm = (props) => {
  const [newVisit, setNewVisit] = useState({
    ballparkRating: '',
    date: '',
    homeTeam: '',
    awayTeam: '',
    gameNotes: '',
  })

  const handleInputChange = (event) => {
    setNewVisit({
      ...newVisit,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearForm = () => {
    setNewVisit({
      ballparkRating: '',
      date: '',
      homeTeam: '',
      awayTeam: '',
      gameNotes: '',
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if(await addVisit(newVisit)){
      clearForm()
    }
  }

  return (
    <div className='callout form-container'>
      <h3>Submit Ballpark Visit</h3>
      <form onSubmit={handleSubmit} className='new-visit-form'>
        <ErrorList errors={errors} />

        <label className='form-label'>
          Ballpark Rating:
          <select 
            className='drop-down-rating form-field'
            name='ballparkRating'
            onChange={handleInputChange}
            value={newVisit.ballparkRating}
            >
            <option value='' >Rate the ballpark</option>
            <option value='1' >1</option>
            <option value='2' >2</option>
            <option value='3' >3</option>
            <option value='4' >4</option>
            <option value='5' >5</option>
            <option value='6' >6</option>
            <option value='7' >7</option>
            <option value='8' >8</option>
            <option value='9' >9</option>
            <option value='10' >10</option>
          </select>
        </label>

        <label className='form-label'>
          Date:
          <input
            type='date'
            name='date'
            onChange={handleInputChange}
            value={newVisit.date}
            className='form-field'
          />
        </label>

        <label className='form-label'>
          Home Team:
          <input
            type='text'
            name='homeTeam'
            onChange={handleInputChange}
            value={newVisit.homeTeam}
            className='form-field'
          />
        </label>

        <label className='form-label'>
          Away Team:
          <input
            type='text'
            name='awayTeam'
            onChange={handleInputChange}
            value={newVisit.awayTeam}
            className='form-field'
          />
        </label>

        <label className='form-label'>
          Visit Notes:
          <textarea
            name='gameNotes'
            onChange={handleInputChange}
            value={newReview.gameNotes}
            className="form-field"
          />
        </label>

        <input className='button' type='submit' value='Add Visit' />

      </form>
    </div>
  )

}

export default NewVisitForm