const db = require("../../data/dbConfig");

module.exports = {
   find,
   findById,
   add,
   remove,
   update,
   
  };

  
function find() {
    return db('candidate');
  };

function findById(id) {
    return db('candidate')
    .where({ id })
}


async function add(candinfo) {
    const [id] = await db('candidate').insert(candinfo);
  
    return findById(id);
  }


  function remove(id) {
    return db('candidate')
      .where({ id })
      .del();
  }

  function update(id, changes) {
    return db('candidate')
      .where({ id })
      .update(changes, '*');
  }



  
