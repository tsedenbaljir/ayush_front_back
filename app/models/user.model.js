module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("tbuser", {
    Username: {
      type: Sequelize.STRING
    },
    Password: {
      type: Sequelize.STRING
    },
  },{
    freezeTableName: true
  });

  return User;
};
