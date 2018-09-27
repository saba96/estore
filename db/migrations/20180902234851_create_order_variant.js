exports.up = (knex, Promise) => {
  return knex.schema.createTable('order_variant', (table) => {
    table.uuid('id').primary()
    table.decimal('quantity').notNullable()
    table.uuid('variantId').notNullable()
    table.foreign('variantId').references('id').inTable('variants')
    table.uuid('orderId').notNullable()
    table.foreign('orderId').references('id').inTable('orders')
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('order_variant')
}
