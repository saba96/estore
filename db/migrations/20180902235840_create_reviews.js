exports.up = (knex, Promise) => {
  return knex.schema.createTable('reviews', (table) => {
    table.uuid('id').primary()
    table.uuid('variantId').notNullable()
    table.foreign('variantId').references('id').inTable('variants')
    table.uuid('customerId').notNullable()
    table.foreign('customerId').references('id').inTable('customers')
    table.string('review', 10000)
    table.enu('rating', ['0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5']).notNullable()
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('reviews')
}
