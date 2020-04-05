exports.up = (knex) => {
  return knex.schema.createTable('sessions', table => {
    table.increments('session_id').primary()
    table.string('s_timestamp')
    table.integer('focus_id')
    table.integer('distance')
})
}

exports.down = (knex) => {
  return knex.schema.dropTable('sessions')
}
