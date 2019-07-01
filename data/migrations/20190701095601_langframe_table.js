exports.up = function(knex, Promise) {
  return knex.schema.createTable("langframe", langframe => {
    langframe.increments("id").primary();
    langframe.string("title");
    langframe.string("description");
    langframe.timestamp("createdAt").defaultTo(knex.fn.now());
    langframe
      .integer("trackId")
      .unsigned()
      .references("id")
      .inTable("track")
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("langframe");
};
