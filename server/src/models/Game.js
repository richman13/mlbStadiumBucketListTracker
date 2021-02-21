const Model = require('./Model.js')

class Game extends Model {
  static get tableName() {
    return 'games'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['ballparkRating'],
      properties: {
        date: { type: 'date'},
        homeTeam: { type: 'string' },
        awayTeam: { type: 'string' },
        gameNotes: { type: 'string'},
        ballparkRating: {
          type: ['integer', 'string'],
          minimum: 1,
          maximum: 10
        }
      }
    }
  }

  static get relationMappings() {
    const { User, Stadium } = require('./index.js')

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'users.visitId',
          to: 'visits.id'
        }
      },
      stadium: {
        relation: Model.BelongsToOneRelation,
        modelClass: Stadium,
        join: {
          from: 'users.stadiumId',
          to: 'stadiums.id'
        }
      }
    } 
  }
}

module.exports = Game