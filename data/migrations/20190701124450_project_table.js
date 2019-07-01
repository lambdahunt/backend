exports.up = function(knex, Promise) {
  return knex.schema.createTable("project", project => {
    project.increments("id").primary();
    project.string("title").notNullable();
    project.string("description");
    project.date("date");
    project.string("link");
    project.string("role");
    project
      .int("candinfoId")
      .unsigned()
      .references("id")
      .inTable("candinfo")
      .notNullable();
    project.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("project");
};
