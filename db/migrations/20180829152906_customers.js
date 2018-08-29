
exports.up = function (knex, Promise) {
  return knex.schema.createTable('customers', table => {
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('customers')
}
