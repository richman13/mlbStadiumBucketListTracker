import express from 'express' 

import { Stadium } from '../../../models/index.js' 

const stadiumsRouter = new express.Router()

stadiumsRouter.get('/', async (req, res) => {
  try {
    const stadiums = await Stadium.query()
    return res.status(200).json({ stadiums })
  } catch (error){
    return res.status(500).json({ errors: error })
  }
})

stadiumsRouter.get('/:id', async (req, res) => {
  try {
    const stadiumId = req.params.id
    const stadium = await Stadium.query().findById(stadiumId)
    stadium.visits = await stadium.$relatedQuery('visits')
    return res.status(200).json({ stadium })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default stadiumsRouter