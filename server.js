const express = require("express");
const cors = require("cors");

const app = express();
const db = require("./app/models");

global.__basedir = __dirname;
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "API server." });
});

// routes
require("./app/routes/articles.routes")(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/person.routes')(app);
require('./app/routes/pages.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
