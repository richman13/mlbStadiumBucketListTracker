const Model = require('./Model')

class Visit extends Model {
  static get tableName() {
    return 'visits'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['visitRanking'],
      properties: {
        date: { type: 'date'},
        homeTeam: { type: 'string' },
        awayTeam: { type: 'string' },
        gameNotes: { type: 'string'},
        visitRating: {
          type: ['integer', 'string'],
          minimum: 1,
          maximum: 5
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

module.exports = Visit