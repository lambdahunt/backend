const db = require("../../data/dbConfig");

module.exports = {
   find,
   findById,
   add,
   remove,
   update,
   findPost,
   findProject
  };

  
function find() {
    return db('candinfo');
  };

function findById(id) {
    return db('candinfo')
    .where({ id })
}


async function add(candinfo) {
    const [id] = await db('candinfo').insert(candinfo);
  
    return findById(id);
  }


  function remove(id) {
    return db('candinfo')
      .where({ id })
      .del();
  }

  function update(id, changes) {
    return db('candinfo')
      .where({ id })
      .update(changes, '*');
  }

  function findPost(candinfoId) {
    return db('post as p')
      .join('candinfo', 'p.candinfoId', 'candinfo.id')
      .select('p.id as id', 'p.author', 'p.textbody', 'p.createdAt', 'candinfo.id as candinfoId' )
      .where({ "candinfoId": candinfoId });
  }

  function findProject(candinfoId) {
    return db('project as p')
      .join('candinfo', 'p.candinfoId', 'candinfo.id')
      .select('p.id as id', 'p.title', 'p.description', 'p.date', 'p.link', 'p.role', 'candinfo.id as candinfoId' )
      .where({ "candinfoId": candinfoId });
  }

  
