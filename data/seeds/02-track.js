exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("track")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("track").insert([
        {
          id: 1,
          title: "Full Stack Web",
          description: "html,css,java-script,react,node,sql",
          duration: 7
        },
        {
          id: 2,
          title: "User Experience Design",
          description: "ui fundementals, prototyping, html, css, web design",
          duration: 7
        }
      ]);
    });
};
