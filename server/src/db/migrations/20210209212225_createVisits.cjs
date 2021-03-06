/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable('visits', table => {
    table.bigIncrements('id')
    table.date('date')
    table.string('homeTeam')
    table.string('awayTeam')
    table.string('gameNotes')
    table.integer('ballparkRating').notNullable()
    table.bigInteger('userId').notNullable().unsigned().index().references('users.id')
    table.bigInteger('stadiumId').notNullable().unsigned().index().references('stadiums.id')
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now())
  })
}
/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists('visits')
}
