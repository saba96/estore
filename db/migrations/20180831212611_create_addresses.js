exports.up = (knex, Promise) => {
  return knex.schema.createTable('addresses', (table) => {
    table.uuid('id').primary()
    table.uuid('customerId').notNullable()
    table.foreign('customerId').references('id').inTable('customers')
    table.string('province').notNullable()
    table.string('city').notNullable()
    table.string('postalAddress', '1000').notNullable()
    table.string('postalCode').notNullable()
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('addresses')
}
