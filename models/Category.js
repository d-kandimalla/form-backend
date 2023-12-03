// models/Category.js
const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Category = sequelize.define(
    "Categories",
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
          model: "Categories", // Table name
          key: "id",
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "Categories",
    }
  );

  Category.associate = function (models) {
    Category.hasMany(models.Category, {
      as: "children",
      foreignKey: "parentId",
      useJunctionTable: false,
    });
  };

  return Category;
};
