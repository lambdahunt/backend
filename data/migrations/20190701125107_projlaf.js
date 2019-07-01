exports.up = function(knex, Promise) {
  return knex.schema.createTable("projlaf", projlaf => {
    projlaf.increments("id").primary();
    projlaf.string("title");
    projlaf
      .int("projectId")
      .unsigned()
      .references("id")
      .inTable("project")
      .notNullable();
    projlaf.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projlaf");
};
