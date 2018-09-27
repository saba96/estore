exports.up = (knex, Promise) => {
  return knex.schema.createTable('orders', (table) => {
    table.uuid('id').primary()
    table.uuid('customerId').notNullable()
    table.foreign('customerId').references('id').inTable('customers')
    table.uuid('storeId').notNullable()
    table.foreign('storeId').references('id').inTable('stores')
    table.enu('shippingStatus', ['pending', 'shipped', 'delivered']).notNullable()
    table.enu('paymentStatus', ['pending', 'paid', 'failed']).notNullable()
    table.enu('orderStatus', ['shoppingCart', 'closed']).notNullable()
    /* as long as order status is in shoppingCart state the price
    can get updated(payment status should be in pending mode) */
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('orders')
}
