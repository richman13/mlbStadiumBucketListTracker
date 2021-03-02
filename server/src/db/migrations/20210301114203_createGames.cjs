/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable('games', table => {
    table.bigIncrements('id')
    table.date('date').notNullable()
    table.string('homeTeam').notNullable()
    table.string('awayTeam').notNullable()
    table.integer('gameStadiumId').notNullable()
    table.bigInteger('stadiumId').notNullable().unsigned().index().references('stadiums.id')
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists('games')
}
