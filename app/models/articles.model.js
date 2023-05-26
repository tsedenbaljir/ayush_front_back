module.exports = (sequelize, Sequelize) => {
  const Articles = sequelize.define("articles", {
    title: {
      type: Sequelize.TEXT,
    },
    data: {
      type: Sequelize.TEXT,
    },
    src: {
      type: Sequelize.TEXT,
    },
  });

  return Articles;
};
