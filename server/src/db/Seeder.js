import { connection } from '../boot.js'
import StadiumSeeder from './seeders/StadiumSeeder.js'

class Seeder {
  static async seed() {
    console.log('seeding stadiums...')
    await StadiumSeeder.seed()

    console.log('done')
    await connection.destroy()
  }
}

export default Seeder