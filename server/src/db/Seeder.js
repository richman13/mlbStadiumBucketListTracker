import { connection } from '../boot.js'
import VisitSeeder from './seeders/VisitSeeder.js'
import StadiumSeeder from './seeders/StadiumSeeder.js'

class Seeder {
  static async seed() {
    console.log('seeding stadiums...')
    await StadiumSeeder.seed()

    console.log('seeding visits...')
    await VisitSeeder.seed()

    console.log('done')
    await connection.destroy()
  }
}

export default Seeder