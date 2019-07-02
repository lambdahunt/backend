require("dotenv").config();
//
const express = require("express");
const server = express();
server.use(express.json());
//
const admin = require("./api/routes/adminRoute");
const candInfo = require("./api/routes/cadinfoRoute");
const track = require("./api/routes/trackRoute");
const langframe = require("./api/routes/langframeRoute");
const contract = require("./api/routes/contractRoute");
const candidate = require("./api/routes/candidateRoute");
const projects = require("./api/routes/projectsRoutes");
//

const authRoutes = require("./auth/auth-router.js");

authRoutes(server);

server.use("/admin", admin);



server.use("/track", track);
server.use("/candinfo", candInfo);
server.use("/langframe", langframe);
server.use("/contract", contract);
server.use("/candidate", candidate);
server.use("/projects", projects)

server.get("/", (req, res) => {
  res.send("<h1>Server Running<h1>");
});
const PORT = process.env.PORT || 9000;
server.listen(PORT, () => console.log("API running..."));
module.exports = { server };
