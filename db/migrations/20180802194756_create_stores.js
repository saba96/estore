exports.up = (knex, Promise) => {
  return knex.schema.createTable('stores', (table) => {
    table.uuid('id').primary()
    table.string('name').notNullable()
    table.unique('name')
    table.string('discription', '4000').notNullable()
    table.uuid('ownerId').notNullable()
    table.foreign('ownerId').references('id').inTable('shop_owners')
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('stores')
}
