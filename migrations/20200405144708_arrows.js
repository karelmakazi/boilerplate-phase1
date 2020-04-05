exports.up = (knex) => {
  return knex.schema.createTable('arrows', table => {
    table.increments('arrow_id').primary()
    table.string('a_timestamp')
    table.integer('quiver_id')
    table.string('a_hitcoord')
})
}

exports.down = (knex) => {
  return knex.schema.dropTable('arrows')
};