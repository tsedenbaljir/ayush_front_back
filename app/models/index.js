const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.pages = require("./pages.model")(sequelize, Sequelize);

db.articles = require("./article/articles.model")(sequelize, Sequelize);
db.article_ctgr = require("./article/article_ctgr.model")(sequelize, Sequelize);
db.articles_article_ctgr = require("./article/articles_article_ctgr.model")(
  sequelize,
  Sequelize
);

// Бидний тухайн холболт
db.article_ctgr.belongsToMany(db.articles, {
  through: "articles_article_ctgrs",
  foreignKey: "article_ctgrId",
  otherKey: "articlesId",
});

// Бидний тухай болон ангилалын холболт
db.articles.belongsToMany(db.article_ctgr, {
  through: "articles_article_ctgrs",
  foreignKey: "articlesId",
  otherKey: "article_ctgrId",
});

db.user = require("../models/user.model.js")(sequelize, Sequelize);
// db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.tus_personal_data = require("../models/person.model.js")(sequelize, Sequelize);

module.exports = db;