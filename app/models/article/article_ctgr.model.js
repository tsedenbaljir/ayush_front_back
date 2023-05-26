module.exports = (sequelize, Sequelize) => {
  const Article_ctgrs = sequelize.define("article_ctgrs", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  });

  return Article_ctgrs;
};
