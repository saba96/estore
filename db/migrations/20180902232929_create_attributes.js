exports.up = (knex, Promise) => {
  return knex.schema.createTable('attributes', (table) => {
    table.uuid('id').primary()
    table.string('name').notNullable()
    table.string('value').notNullable()
    table.uuid('variantId').notNullable()
    table.foreign('variantId').references('id').inTable('variants')
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('attributes')
}
