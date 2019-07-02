const db = require("../../data/dbConfig");
module.exports = {
  get: id => {
    let query = db("admin");
    if (id) {
      query = db("admin").where("admin.id", id);
    }
    return query;
  },
  initialize: async track => {
    const [id] = await db("track").insert(track);
    return db("track")
      .where({ id })
      .first();
  },
  attach: async langframe => {
    const [id] = await db("langframe").insert(langframe);
    return db("langframe")
      .where({ id })
      .first();
  },
  hire: async contract => {
    const [id] = await db("contract").insert(contract);
    return db("contract")
      .where({ id })
      .first();
  },
  endorse: async candidate => {
    const [id] = await db("candidate").insert(candidate);
    return db("candidate")
      .where({ id })
      .first();
  },
  register: async admin => {
    // console.log(admin);
    const [id] = await db("admin").insert(admin);
    return db("admin")
      .where({ id })
      .first();
  }
};
