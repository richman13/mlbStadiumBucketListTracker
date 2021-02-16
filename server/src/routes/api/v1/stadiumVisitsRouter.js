import express from "express"
import objection from "objection"
const { ValidationError } = objection
import VisitSerializer from '../../../serializers/VisitSerializer.js'

import { Visit } from "../../../models/index.js"

import cleanUserInput from "../../../services/cleanUserInput.js"

const stadiumVisitsRouter = new express.Router({ mergeParams: true })

stadiumVisitsRouter.post('/', async (req, res) => {
  const stadiumId = req.params.stadiumId 
  const body = req.body
  const cleanBody = cleanUserInput(body)

  try {
    const newVisit = await Visit.query().insertAndFetch({ ...cleanBody, stadiumId })
    const serializedVisit = await VisitSerializer.getDetails(newVisit, newVisit.userId)
    return res.status(201).json({ newVisit: serializedVisit })
  } catch (error){
    if (error instanceof ValidationError){
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }

})

export default stadiumVisitsRouter