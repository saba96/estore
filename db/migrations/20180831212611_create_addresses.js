exports.up = (knex, Promise) => {
  return knex.schema.createTable('addresses', (table) => {
    table.uuid('addressID')
    table.string('customerID').notNullable()
    table.string('province').notNullable()
    table.string('city').notNullable().unique()
    table.string('postalAddress').notNullable()
    table.string('postalCode').notNullable()
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('addresses')
}
