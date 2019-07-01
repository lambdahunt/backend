exports.up = function(knex, Promise) {
  return knex.schema.createTable("candidate", candidate => {
    candidate.increments("id").primary();
    candidate
      .string("email")
      .unique()
      .notNullable();
    candidate.string("password").notNullable();
    candidate.string("firstname").notNullable();
    candidate.string("lastname").notNullable();
    candidate.string("contracts");
    candidate.bool("hired").defaultTo(false);
    candidate.string("track");
    candidate
      .integer("trackId")
      .unsigned()
      .references("id")
      .inTable("track")
      .notNullable();
    candidate.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("candidate");
};
