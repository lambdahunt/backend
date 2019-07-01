exports.up = function(knex, Promise) {
  return knex.schema.createTable("candinfo", candinfo => {
    candinfo.increments("id").primary();
    candinfo.string("bio");
    candinfo.string("portfolio");
    candinfo.string("resume");
    candinfo.string("linedin");
    candinfo.string("otherlinks");
    candinfo.string("location");
    candinfo.bool("relocate");
    candinfo.string("endorsedby");
    candinfo
      .int("candidateId")
      .unsigned()
      .references("id")
      .inTable("candidate")
      .notNullable();
    candinfo.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("candinfo");
};
