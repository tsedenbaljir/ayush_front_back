module.exports = (sequelize, Sequelize) => {
  const tus_personal_data = sequelize.define("tus_personal_data", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    HHID: {
      type: Sequelize.INTEGER
    },
    HD7: {
      type: Sequelize.INTEGER
    },
    HD9: {
      type: Sequelize.STRING
    },
    HD10_H: {
      type: Sequelize.INTEGER
    },
    HD11: {
      type: Sequelize.INTEGER
    },
    ED1: {
      type: Sequelize.INTEGER
    },
    ED2: {
      type: Sequelize.INTEGER
    },
    ED3: {
      type: Sequelize.INTEGER
    },
    ED4: {
      type: Sequelize.INTEGER
    },
    HE1: {
      type: Sequelize.INTEGER
    },
    HE2: {
      type: Sequelize.INTEGER
    },
    HE3: {
      type: Sequelize.INTEGER
    },
    HE4: {
      type: Sequelize.INTEGER
    },
    HE5: {
      type: Sequelize.INTEGER
    },
    HE6: {
      type: Sequelize.INTEGER
    },
    HE7: {
      type: Sequelize.INTEGER
    },
    HE8: {
      type: Sequelize.INTEGER
    },
    HE9: {
      type: Sequelize.INTEGER
    },
    HE10: {
      type: Sequelize.INTEGER
    },
    HE11: {
      type: Sequelize.INTEGER
    },
    MS1: {
      type: Sequelize.INTEGER
    },
    MS2: {
      type: Sequelize.INTEGER
    },
    MS3: {
      type: Sequelize.INTEGER
    },
    MS4: {
      type: Sequelize.INTEGER
    },
    EP1: {
      type: Sequelize.INTEGER
    },
    EP2: {
      type: Sequelize.INTEGER
    },
    EP3: {
      type: Sequelize.INTEGER
    },
    EP4: {
      type: Sequelize.INTEGER
    },
    EP5: {
      type: Sequelize.INTEGER
    },
    EP6: {
      type: Sequelize.INTEGER
    },
    EP7: {
      type: Sequelize.INTEGER
    },
    EP8: {
      type: Sequelize.INTEGER
    },
    EP8_OTHER: {
      type: Sequelize.STRING
    },
    EP9: {
      type: Sequelize.INTEGER
    },
    EP10: {
      type: Sequelize.INTEGER
    },
    EP11: {
      type: Sequelize.INTEGER
    },
    EP12: {
      type: Sequelize.INTEGER
    },
    EP13_A: {
      type: Sequelize.STRING
    },
    EP13_B: {
      type: Sequelize.STRING
    },
    EP13_C: {
      type: Sequelize.STRING
    },
    EP14: {
      type: Sequelize.INTEGER
    },
    EP15: {
      type: Sequelize.INTEGER
    },
    EP16_A: {
      type: Sequelize.STRING
    },
    EP16_B: {
      type: Sequelize.STRING
    },
    EP17: {
      type: Sequelize.INTEGER
    },
    EP18: {
      type: Sequelize.INTEGER
    },
    EP18_A: {
      type: Sequelize.STRING
    },
    HD12: {
      type: Sequelize.INTEGER
    },
    HD12_A: {
      type: Sequelize.STRING
    },
    HD13: {
      type: Sequelize.INTEGER
    },
    HD14: {
      type: Sequelize.INTEGER
    },
    createdAt: {
      type: Sequelize.DATE
    },
    InsertedUser	: {
      type: Sequelize.INTEGER
    },
    updatedAt: {
      type: Sequelize.DATE
    },
    UpdatedUser: {
      type: Sequelize.INTEGER
    },
    IsActive: {
      type: Sequelize.INTEGER
    },
    IsFinish: {
      type: Sequelize.INTEGER
    }
  },{
    freezeTableName: true
  });

  return tus_personal_data;
};
