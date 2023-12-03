// models/Category.js
const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Sectors = sequelize.define(
    "Sectors",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      parentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Sectors", // Table name
          key: "id",
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "Sectors",
    }
  );

  Sectors.associate = function (models) {
    Sectors.hasMany(models.Sectors, {
      as: "children",
      foreignKey: "parentId",
      useJunctionTable: false,
    });
  };

  return Sectors;
};
