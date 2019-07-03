exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("candidate")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("candidate").insert([
        {
          id: 1,
          email: "dio@gmail.com",
          password: "dio123",
          firstname: "dionuta",
          lastname: "burton",
          isSectionLead: true,
          isTeamLead: false,
          isEndorsed: true,
          track: "Full Stack Web",
          trackId: 1
        },
        {
          id: 2,
          email: "eri@gmail.com",
          password: "eri123",
          firstname: "eric",
          lastname: "sarragalugo",
          isSectionLead: true,
          isTeamLead: false,
          isEndorsed: true,
          track: "Full Stack Web",
          trackId: 1
        },
        {
          id: 3,
          email: "jef@gmail.com",
          password: "jef123",
          firstname: "jeff",
          lastname: "kang",
          isSectionLead: true,
          isTeamLead: false,
          isEndorsed: true,
          track: "Full Stack Web",
          trackId: 1
        },
        {
          id: 4,
          email: "sha@gmail.com",
          password: "sha123",
          firstname: "shaun",
          lastname: "zinda",
          isSectionLead: true,
          isTeamLead: false,
          isEndorsed: true,
          track: "User Experience Design",
          trackId: 2
        },
        {
          id: 5,
          email: "rub@gmail.com",
          password: "rub123",
          firstname: "ruben",
          lastname: "rosa",
          isSectionLead: true,
          isTeamLead: false,
          isEndorsed: true,
          track: "Full Stack Web",
          trackId: 1
        }
      ]);
    });
};
