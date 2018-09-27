exports.up = (knex, Promise) => {
  return knex.schema.createTable('shippings', (table) => {
    table.uuid('id').primary()
    table.uuid('orderId').notNullable()
    table.foreign('orderId').references('id').inTable('orders')
    table.decimal('priceOfShipping', 14, 2).notNullable()
    table.decimal('priceOfItems', 14, 2).notNullable()
    table.uuid('destinationAddressId').notNullable()
    table.foreign('destinationAddressId').references('id').inTable('addresses')
    table.enu('status', ['pending', 'shipped', 'delivered']).notNullable()
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('shippings')
}
