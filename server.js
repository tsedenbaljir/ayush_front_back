const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");
const https = require('https');

const fs = require('fs');

const options = {
	key: fs.readFileSync('key.key'),
	cert: fs.readFileSync('nso.pem')
  };

global.__basedir = __dirname;
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
db.sequelize.sync();
// simple route
app.get("/", (req, res) => {
	res.header('X-Frame-Options','SAMEORIGIN');
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers','X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.json({ message: "REST API" });
});
// routes
require("./app/routes/articles.routes")(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/person.routes')(app);
require('./app/routes/pages.routes')(app);
// set port, listen for requests
// https.createServer(options, app).listen(3001);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`:Server is running on port ${PORT}.`);
});
