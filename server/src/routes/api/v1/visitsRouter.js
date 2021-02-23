import express from "express"
import objection from "objection"
const { ValidationError } = objection
import VisitSerializer from '../../../serializers/VisitSerializer.js'

import { Visit } from "../../../models/index.js"

import cleanUserInput from "../../../services/cleanUserInput.js"

const visitsRouter = new express.Router({ mergeParams: true })

visitsRouter.post('/', async (req, res) => {
  const stadiumId = req.body.stadium.id 
  const userId = req.body.userId
  const body = req.body.visit
  const cleanBody = cleanUserInput(body)

  try {
    const newVisit = await Visit.query().insertAndFetch({ ...cleanBody, stadiumId, userId })
    //const serializedVisit = await VisitSerializer.getSummary(newVisit, newVisit.userId)
    return res.status(201).json({ visit: newVisit })
  } catch (error){
    if (error instanceof ValidationError){
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

visitsRouter.patch('/', async (req, res) => {
  const body = req.body
  const id = req.body.id 
  try {
    const visit = await Visit.query().updateAndFetchById(id, body)
    return res.status(200).json({visit})
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

visitsRouter.delete('/:id', async (req, res) => {
  debugger
  const id = req.params.id 
  try {
    const visit = await Visit.query().deleteById(id)
    return res.status(200).json({id})
  } catch (errror) {
    return res.status(500).json({ errors: error })
  }
})


visitsRouter.get('/', async (req, res) => {
  try {
    const visits = await Visit.query()
    return res.status(200).json({ visits })
  } catch (error){
    return res.status(500).json({ errors: error })
  }
})

export default visitsRouter