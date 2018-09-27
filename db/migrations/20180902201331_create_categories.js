exports.up = (knex, Promise) => {
  return knex.schema.createTable('categories', (table) => {
    table.uuid('id').primary()
    table.string('name').notNullable()
    table.unique('name')
    table.uuid('parentId').notNullable()
    table.foreign('parentId').references('id').inTable('categories')
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('categories')
}
