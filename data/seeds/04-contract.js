exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("contract")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("contract").insert([
        {
          id: 1,
          title: "Team Lead",
          description: "code review, lead standups, etc"
        },
        {
          id: 2,
          title: "Section Lead",
          description: "lead tl standups, oragnize code challenges, etc"
        }
      ]);
    });
};
