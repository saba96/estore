exports.up = (knex, Promise) => {
  return knex.schema.createTable('customers', (table) => {
    table.uuid('id').primary()
    table.string('firstName', 36).notNullable()
    table.string('lastName', 36).notNullable()
    table.string('email').notNullable()
    table.unique('email')
    table.string('password').notNullable()
    table.enu('gender', ['male', 'female', 'others']).notNullable()
    table.enu('role', ['customer'])
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('customers')
}
