import { Stadium } from '../../models/index.js'

class StadiumSeeder {
  static async seed() {
    const stadiumsData = [
      {
        name: 'American Family Field',
        city: 'Milwauakee',
        homeTeam: 'Brewers',
        capacity: 41900
      },
      {
        name: 'Angel Stadium',
        city: 'Anaheim',
        homeTeam: 'Angels',
        capacity: 455517
      },
      {
        name: 'Busch Stadium',
        city: 'Saint Louis',
        homeTeam: 'Cardinals',
        capacity: 45494
      },
      {
        name: 'Chase Field',
        city: 'Phoenix',
        homeTeam: 'DiamondBacks',
        capacity: 48686
      },
      {
        name: 'Citi Field',
        city: 'New York',
        homeTeam: 'Mets',
        capacity: 41922
      },
      {
        name: 'Citizens Bank Park',
        city: 'Philadelphia',
        homeTeam: 'Phillies',
        capacity: 42792
      },
      {
        name: 'Comerica Park',
        city: 'Detroit',
        homeTeam: 'Tigers',
        capacity: 41083
      },
      {
        name: 'Coors Field',
        city: 'Denver',
        homeTeam: 'Rockies',
        capacity: 50445
      },
      {
        name: 'Dodger Stadium',
        city: 'Los Angeles',
        homeTeam: 'Dodgers',
        capacity: 56000
      },
      {
        name: 'Fenway Park',
        city: 'Boston',
        homeTeam: 'Red Sox',
        capacity: 37755
      },
      {
        name: 'Globe Life Field',
        city: 'Arlington',
        homeTeam: 'Rangers',
        capacity: 40300
      },
      {
        name: 'Great American Ball Park',
        city: 'Cincinnati',
        homeTeam: 'Reds',
        capacity: 42319
      },
      {
        name: 'Guaranteed Rate Field',
        city: 'Chicago',
        homeTeam: 'White Sox',
        capacity: 40615
      },
      {
        name: 'Kaufmann Stadium',
        city: 'Kansas City',
        homeTeam: 'Royals',
        capacity: 37903
      },
      {
        name: 'Minute Maid Park',
        city: 'Houston',
        homeTeam: 'Padres',
        capacity: 41168
      },
      {
        name: 'Nationals Park',
        city: 'Washington',
        homeTeam: 'Nationals',
        capacity: 41339
      },
      {
        name: 'Oakland Coliseum',
        city: 'Oakland',
        homeTeam: 'Athletics',
        capacity: 46847
      },
      {
        name: 'Oracle Park',
        city: 'San Francisco',
        homeTeam: 'Giants',
        capacity: 41265
      },
      {
        name: 'Oriole Park at Camden Yards',
        city: 'Baltimore',
        homeTeam: 'Orioles',
        capacity: 45971
      },
      {
        name: 'PETCO Park',
        city: 'San Diego',
        homeTeam: 'Padres',
        capacity: 40209
      },
      {
        name: 'PNC Park',
        city: 'Pittsburgh',
        homeTeam: 'Pirates',
        capacity: 38747
      },
      {
        name: 'Progressive Field',
        city: 'Cleveland',
        homeTeam: 'Indians',
        capacity: 35041
      },
      {
        name: 'Rogers Centre',
        city: 'Toronto',
        homeTeam: 'Blue Jays',
        capacity: 49282
      },
      {
        name: 'T-Mobile Park',
        city: 'Seattle',
        homeTeam: 'Mariners',
        capacity: 47929
      },
      {
        name: 'Target Field',
        city: 'Minneapolis',
        homeTeam: 'Twins',
        capacity: 38544
      },
      {
        name: 'Tropicana Field',
        city: 'St. Petersburg',
        homeTeam: 'Rays',
        capacity: 25000
      },
      {
        name: 'Truist Park',
        city: 'Cumberland',
        homeTeam: 'Braves',
        capacity: 41084
      },
      {
        name: 'Wrigley Field',
        city: 'Chicago',
        homeTeam: 'Cubs',
        capacity: 41649
      },
      {
        name: 'Yankee Stadium',
        city: 'New York',
        homeTeam: 'Yankees',
        capacity: 47309
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