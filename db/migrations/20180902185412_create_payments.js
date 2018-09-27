exports.up = (knex, Promise) => {
  return knex.schema.createTable('payments', (table) => {
    table.uuid('id').primary()
    table.uuid('orderId').notNullable()
    table.foreign('orderId').references('id').inTable('orders')
    table.enu('status', ['pending', 'paid', 'failed']).notNullable()
    table.decimal('amount', 14, 2).notNullable()
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('payments')
}
