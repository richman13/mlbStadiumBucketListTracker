import { Visit } from '../../models/index.js' 

class VisitSeeder {
  static async seed() {
    const visitsData = [
      {
        date: '2020-8-10T00:00:00',
        homeTeam: 'Padres',
        awayTeam: 'Red Sox',
        gameNotes: 'Sox won 5-4 in the 9th',
        ballparkRating: 8,
        userId: 1,
        stadiumId: 1
      },
      {
        date: '2020-6-17T00:00:00',
        homeTeam: 'Red Sox',
        awayTeam: 'Cubs',
        gameNotes: 'Sox win 6-1. Chris Sale pitched a gem.',
        ballparkRating: 10,
        userId: 1,
        stadiumId: 8
      },
      {
        date: '2020-5-10T00:00:00',
        homeTeam: 'Padres',
        awayTeam: 'Mets',
        gameNotes: 'Padres won 5-2. Great weather and beautiful ballpark',
        ballparkRating: 9,
        userId: 1,
        stadiumId: 1
      },
      {
        date: '2020-5-20T00:00:00',
        homeTeam: 'Orioles',
        awayTeam: 'Athletics',
        gameNotes: 'Great ballpark to watch a game. ',
        ballparkRating: 9,
        userId: 1,
        stadiumId: 5
      }
    ]

    for (const singleVisitData of visitsData) {
      const currentVisit = await Visit.query().findOne(singleVisitData)

      if (!currentVisit) {
        await Visit.query().insert(singleVisitData)
      }
    }
  }
}

export default VisitSeeder