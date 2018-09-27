exports.up = (knex, Promise) => {
  return knex.schema.createTable('products', (table) => {
    table.uuid('id').primary()
    table.string('name').notNullable()
    table.unique('name')
    table.uuid('categoryId').notNullable()
    table.foreign('categoryId').references('id').inTable('categories')
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('products')
}
