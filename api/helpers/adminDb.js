const db = require("../../data/dbConfig");
module.exports = {
  get: id => {
    let query = db("admin");
    if (id) {
      query = db("admin").where("admin.id", id);
    }
    return query;
  }
};
