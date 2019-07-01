
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require("../data/dbConfig")


const secrets = require("../config/secrets");


function generateToken(user) {
    return jwt.sign(
      {
        userId: user.id
      },
      secrets.jwt,
      {
        expiresIn: "1h"
      }
    );
  }

module.exports = server => {
    server.post("/api/login", login);
    
  };


function login(req, res) {
	const creds = req.body;
	db('admin')
		.where({ username: creds.username })
		.first()
		.then((user) => {
			if (user && bcrypt.compareSync(creds.password, user.password)) {
				const token = generateToken(user);
				res.status(200).json({ message: 'Welcome!', token });
			} else {
				res.status(401).json({ message: 'NO NO NO' });
			}
		})
		.catch((err) => res.status(400).json(err));
}
