const db = require("../../data/dbConfig");

module.exports = {
    findPost,
    findPostById,
    addPost,
    removePost,
    updatePost

   };
 
function findPost() {
    return db('post');
  };

  function findPostById(id) {
    return db('post')
    .where({ id })
}

async function addPost(post) {
    const [id] = await db('post').insert(post);
  
    return findPostById(id);
  }


  function removePost(id) {
    return db('post')
      .where({ id })
      .del();
  }

  function updatePost(id, changes) {
    return db('post')
      .where({ id })
      .update(changes, '*');
  }