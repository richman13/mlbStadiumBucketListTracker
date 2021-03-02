const Model = require('./Model.js')

class Game extends Model {
  static get tableName() {
    return 'games'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['date, homeTeam, awayTeam, gameStadiumId'],
      properties: {
        date: { type: 'date'},
        homeTeam: { type: 'string' },
        awayTeam: { type: 'string' },
        gameStadiumId: { type: 'string, integer'},
      }
    }
  }

  static get relationMappings() {
    const { Stadium } = require('./index.js')

    return {
      stadium: {
        relation: Model.HasManyRelation,
        modelClass: Stadium,
        join: {
          from: 'games.stadiumId',
          to: 'stadiums.id'
        }
      }
    } 
  }
}

module.exports = Game