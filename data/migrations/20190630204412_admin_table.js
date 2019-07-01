exports.up = function(knex, Promise) {
  return knex.schema.createTable("admin", admin => {
    admin.increments("id").primary();
    admin
      .string("username")
      .unique()
      .notNullable();
    admin
      .string("password")
      .unique()
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("admin");
};
