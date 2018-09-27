exports.up = (knex, Promise) => {
  return knex.schema.createTable('variants', (table) => {
    table.uuid('id').primary()
    table.string('name').notNullable()
    table.uuid('productId').notNullable()
    table.foreign('productId').references('id').inTable('products')
    table.uuid('storeId').notNullable()
    table.foreign('storeId').references('id').inTable('stores')
    table.string('imageURL', '3000').notNullable()
    table.decimal('price', 12, 2).notNullable()
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('variants')
}
