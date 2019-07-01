exports.up = function(knex, Promise) {
  return knex.schema.createTable("post", post => {
    post.increments("id").primary();
    post.string("author").notNullable();
    post.string("textbody");
    post
      .integer("candinfoId")
      .unsigned()
      .references("id")
      .inTable("candinfo")
      .notNullable();
    post.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("post");
};
