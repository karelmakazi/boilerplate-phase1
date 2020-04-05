exports.up = (knex) => {
  return knex.schema.createTable('quivers', table => {
    table.increments('quiver_id').primary()
    table.string('q_timestamp')
    table.integer('session_id')
    table.string('q_notes')
})
}


exports.down = (knex) => {
  return knex.schema.dropTable('quivers')
  
}