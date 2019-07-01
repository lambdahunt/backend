exports.up = function(knex, Promise) {
  return knex.schema.createTable("track", track => {
    track.increments("id").primary();
    track.string("title").unique();
    track.string("description");
    track.int("duration");
    track.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("track");
};
