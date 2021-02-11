import { Stadium } from '../../models/index.js'

class StadiumSeeder {
  static async seed() {
    const stadiumsData = [
      {
        name: 'PETCO Park',
        city: 'San Diego',
        homeTeam: 'Padres',
        capacity: 41164
      },
      {
        name: 'Turner Field',
        city: 'Atlanta',
        homeTeam: 'Braves',
        capacity: 49586
      },
      {
        name: 'Citi Field',
        city: 'New York',
        homeTeam: 'Mets',
        capacity: 41922
      },
      {
        name: 'Miller Park',
        city: 'Milwaukee',
        homeTeam: 'Brewers',
        capacity: 41900
      },
      {
        name: 'Oriole Park at Camden Yards',
        city: 'Baltimore',
        homeTeam: 'Orioles',
        capacity: 45971
      },
      {
        name: 'Oakland Coliseum',
        city: 'Oakland',
        homeTeam: 'Athletics',
        capacity: 35067
      },
      {
        name: 'Wrigley Field',
        city: 'Chicago',
        homeTeam: 'Cubs',
        capacity: 40929
      },
      {
        name: 'Fenway Park',
        city: 'Boston',
        homeTeam: 'Red Sox',
        capacity: 37499
      }
    ]

    for (const singleStadiumData of stadiumsData) {
      const currentStadium = await Stadium.query().findOne(singleStadiumData)

      if (!currentStadium) {
        await Stadium.query().insert(singleStadiumData)
      }
    }
  }
}

export default StadiumSeeder