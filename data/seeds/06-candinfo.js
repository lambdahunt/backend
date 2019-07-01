exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("candinfo")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("candinfo").insert([
        {
          id: 1,
          bio: "bio",
          portfolio: "some portfolio url",
          resume: "some resume",
          linedin: "some lined in",
          otherlinks: "someother links",
          location: "some location",
          relocate: true,
          candidateId: 1
        },
        {
          id: 2,
          bio: "bio",
          portfolio: "some portfolio url",
          resume: "some resume",
          linedin: "some lined in",
          otherlinks: "someother links",
          location: "some location",
          relocate: true,
          candidateId: 2
        },
        {
          id: 3,
          bio: "bio",
          portfolio: "some portfolio url",
          resume: "some resume",
          linedin: "some lined in",
          otherlinks: "someother links",
          location: "some location",
          relocate: true,
          candidateId: 3
        },
        {
          id: 4,
          bio: "bio",
          portfolio: "some portfolio url",
          resume: "some resume",
          linedin: "some lined in",
          otherlinks: "someother links",
          location: "some location",
          relocate: true,
          candidateId: 4
        },
        {
          id: 5,
          bio: "bio",
          portfolio: "some portfolio url",
          resume: "some resume",
          linedin: "some lined in",
          otherlinks: "someother links",
          location: "some location",
          relocate: true,
          candidateId: 5
        }
      ]);
    });
};
