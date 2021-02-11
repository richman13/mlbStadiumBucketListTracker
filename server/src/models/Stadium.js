const Model = require('./Model')

class Stadium extends Model {
  static get tableName() {
    return 'stadiums'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
        city: { type: 'string' },
        homeTeam: { type: 'string' },
        capacity: { type: [ 'integer', 'string' ] },
      }
    }
  }

  static get relationMappings() {
    const Visit = require('./Visit.js')

    return {
      visits: {
        relation: Model.HasManyRelation,
        modelClass: Visit,
        join: {
          from: "stadiums.id",
          to: "visits.stadiumId"
        }
      }
    }
  }
}

module.exports = Stadium