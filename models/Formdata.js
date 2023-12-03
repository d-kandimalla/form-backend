const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("FormData", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sectors: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Sectors", // Table name
        key: "id",
      },
    },
    agreedToTerms: {
      type: DataTypes.BOOLEAN,
    },
  });
};
