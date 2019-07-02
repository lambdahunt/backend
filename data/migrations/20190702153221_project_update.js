exports.up = function(knex, Promise) {
    return knex.schema.createTable("project", project => {
      project.increments("id").primary();
      project.string("title").notNullable();
      project.string("description");
      project.date("date");
      project.string("deploy");
      project.string("repo");
      project.string("role");
      project.string("url");
      project
        .integer("candinfoId")
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
  