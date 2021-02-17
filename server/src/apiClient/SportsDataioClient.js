import got from 'got' 

class SportsDataIoClient {
  static async getSchedule(season) {
    try {
      const url = `https://api.sportsdata.io/v3/mlb/scores/json/Games/${season}`
      const apiResponse = await got(url)
      const responseBody = apiResponse.body
      return responseBody
    } catch (error) {
      return { error: error.message }
    }
  }
}

export default SportsDataIoClient