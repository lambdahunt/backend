require("dotenv").config();
//
const express = require("express");
const server = express();
server.use(express.json());
//
const admin = require("./api/routes/adminRoute");
const candInfo = require("./api/routes/cadinfoRoute");
const track = require("./api/routes/trackRoute");
//
server.use("/admin", admin);
server.use("/track", track);
server.use("/candInfo", candInfo);
server.get("/", (req, res) => {
  res.send("<h1>Server Running<h1>");
});
const PORT = process.env.PORT || 9000;
server.listen(PORT, () => console.log("API running..."));
module.exports = { server };
