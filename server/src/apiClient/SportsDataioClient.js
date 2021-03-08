import got from 'got'

const apiKey = "2ebf479bc7664c08aa4e79131256ab44";

// Ocp-Apim-Subscription-Key: {key}

class SportsDataIoClient {
  static async getSchedule(season) {
    try {
      const url = `https://api.sportsdata.io/v3/mlb/scores/json/Games/${season}?key=${apiKey}`
      const apiResponse = await got(url)
      const responseBody = apiResponse.body
      return responseBody
    } catch (error) {
      return { error: error.message }
    }
  }
}

export default SportsDataIoClient