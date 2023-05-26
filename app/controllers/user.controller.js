const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

exports.check = (req, res) => {
  if (!req.headers["x-access-token"]) {
    return res.status(401).send({
      message: "Unauthorized!"
    });
  }

  let token = req.headers["x-access-token"];
  const bearer = token.split('"');
  token = bearer[1];

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    res.status(200).send({ status: true, token: decoded, message: 'Success' });
  });
};

exports.over = (req, res) => {
  res.status(200).send("User Content.");
};
