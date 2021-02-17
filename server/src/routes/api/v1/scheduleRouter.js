import express from "express" 

import SportsDataioClient from "../../../apiClient/SportsDataioClient.js"

const scheduleRouter = new express.Router()

scheduleRouter.get("/", (req, res) => {
  const season = req.query.season 

  SportsDataioClient.getSchedule(season).then((data) => {
    if (data.error) {
      console.log(`Error from SportsDataio: ${data.error}`)
    } else {
      const parsedResponse = JSON.parse(data)
      res.set({ 'Content-Type': 'application/json' }).status(200).json(parsedResponse)
    }
  })
})

export default scheduleRouter