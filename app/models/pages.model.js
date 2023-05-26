module.exports = (sequelize, Sequelize) => {
  const Articles = sequelize.define("pages", {
    title: {
      type: Sequelize.TEXT,
    },
    data: {
      type: Sequelize.TEXT,
    }
  });

  return Articles;
};
