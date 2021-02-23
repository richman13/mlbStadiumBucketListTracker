import React, { useState } from 'react'

import ErrorList from './ErrorList'

const EditVisitForm = (props) => {
  const { patchVisit, updateEditable, previousVisit } = props
  debugger
  const [visit, setVisit] = useState({
    ballparkRating: previousVisit.ballparkRating,
    date: previousVisit.date || '',
    homeTeam: previousVisit.homeTeam || '',
    awayTeam: previousVisit.awayTeam || '',
    gameNotes: previousVisit.gameNotes || '',
    id: previousVisit.id
  })


const handleInputChange = (event) => {
  setVisit({
    ...visit,
    [event.currentTarget.name]: event.currentTarget.value
  })
}

const handleSave = async (event) => {
  event.preventDefault()
  if(await patchVisit(visit)){
    return updateEditable()
  } 
}

return (
  <div className='callout form-container'>
    <form onSubmit={handleSave} >
      <div className='grid-container'>
      {/* <ErrorList errors={errors} /> */}
        <h3>Edit Ballpark Visit</h3>
        <div className="cell small-3">
            <div className='grid-x'>
              <div className='cell small-6'>
                <label htmlFor='edit-ballparkRating' className='text-right middle form-label'>Ballpark Rating:</label>
              </div>
              <div className='cell small-6'>
                <select 
                  className='drop-down-rating form-field'
                  id='edit-ballparkRating'
                  name='ballparkRating'
                  onChange={handleInputChange}
                  value={visit.ballparkRating}
                  >
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
              </div>
            </div>
          </div>
        <div className='grid-x'>
          <div className='cell small-9'>
            <div className='grid-x grid-padding-x'>
              <div className="cell small-1">
                <label htmlFor='edit-date' className='text-right middle form-label'>Date:</label>
              </div>
              <div className="cell small-11">
                <input
                  type='date'
                  id='edit-date'
                  name='date'
                  onChange={handleInputChange}
                  value={visit.date}
                  className='form-field'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='grid-x'>
          <div className='cell small-9'>
            <div className='grid-x grid-padding-x'>
              <div className="cell small-1">
                <label htmlFor='edit-homeTeam' className='text-right middle form-label'>Home Team:</label>
              </div>
              <div className="cell small-11">
                <input
                  type='text'
                  id='edit-homeTeam'
                  name='homeTeam'
                  onChange={handleInputChange}
                  value={visit.homeTeam}
                  className='form-field'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='grid-x'>
          <div className='cell small-9'>
            <div className='grid-x grid-padding-x'>
              <div className="cell small-1">
                <label htmlFor='edit-awayTeam' className='text-right middle form-label'>Away Team:</label>
              </div>
              <div className="cell small-11">
                <input
                  type='text'
                  id='edit-awayTeam'
                  name='awayTeam'
                  onChange={handleInputChange}
                  value={visit.awayTeam}
                  className='form-field'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='grid-x grid-padding-x '>
          <div className='cell small-1'>
            <label htmlFor='edit-gameNotes' className='text-right middle form-label'>Visit Notes:</label>
          </div>
          <div className='cell small-11'>
            <textarea
              name='gameNotes'
              onChange={handleInputChange}
              value={visit.gameNotes}
              className='form-field'
            />
          </div>
        </div>
        <input className='button' type='submit' value='Save' />
      </div>
    </form>
  </div>
)
}

export default EditVisitForm