exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("project")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("project").insert([
        {
          id: 1,
          title: "ImmuTrack",
          description: "ImmuTrack was built from the ground up to help reduce hassle and potential stress through the provision of a centralized and streamlined resource with which to track all of your immunization needs.",
          date: "12/21/2018",
          role: "Frontend Architecture",
          url:"something.com",
          deploy:"something.com",
          repo:"something.com",
          candinfoId: 4
        },
        {
          id: 2,
          title: "React Scoreboard",
          description: "A dynamic scoreboard app for tracking points and timing turns created with React",
          date: "1/01/2019",
          role: "Backend Architecture",
          url:"something.com",
          deploy:"something.com",
          repo:"something.com",
          candinfoId: 2
        },
        {
          id: 3,
          title: "Space Walker",
          description: "This Project explored advanced CSS techniques using Responsive Design and Preprocessing.",
          date: "7/11/2019",
          role: "UI",
          url:"something.com",
          deploy:"something.com",
          repo:"something.com",
          candinfoId: 4
        }
      ]);
    });
};
