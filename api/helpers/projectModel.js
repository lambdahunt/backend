const db = require("../../data/dbConfig");

module.exports = {
    findProject,
    findProjectById,
    addProject,
    removeProject,
    updateProject
   };
 
function findProject() {
    return db('project');
  };

  function findProjectById(id) {
    return db('project')
    .where({ id })
}

async function addProject(project) {
    const [id] = await db('project').insert(project);
  
    return findById(id);
  }


  function removeProject(id) {
    return db('project')
      .where({ id })
      .del();
  }

  function updateProject(id, changes) {
    return db('project')
      .where({ id })
      .update(changes, '*');
  }