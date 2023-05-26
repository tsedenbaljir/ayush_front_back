module.exports = (sequelize, Sequelize) => {
  const Articles_article_ctgrs = sequelize.define("articles_article_ctgrs", {
    article_ctgrId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    articlesId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
  });

  return Articles_article_ctgrs;
};
