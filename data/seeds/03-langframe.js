exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("langframe")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("langframe").insert([
        {
          id: 1,
          title: "html",
          description: "hypertext markup language",
          trackId: 1
        },
        {
          id: 2,
          title: "css",
          description: "cascading style sheets",
          trackId: 1
        },
        {
          id: 3,
          title: "javascript",
          description: "high-level, popular web language",
          trackId: 1
        }
      ]);
    });
};
