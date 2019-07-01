exports.up = function(knex, Promise) {
  return knex.schema.createTable("contract", contract => {
    contract.increments("id").primary();
    contract.string("title").unique();
    contract.string("description");
    contract.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("contract");
};
