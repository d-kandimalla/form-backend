// Industry.js

module.exports = (sequelize, DataTypes) => {
  const Industry = sequelize.define(
    "Industry",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subcategory: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return Industry;
};
