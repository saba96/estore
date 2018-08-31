exports.up = (knex, Promise) => {
  return knex.schema.createTable('customers', (table) => {
    table.uuid('customerID')
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
    table.enu('gender', ['male', 'female', 'others']).notNullable()
    table.enu('role', ['customer'])
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('customers')
}
