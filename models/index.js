const Sequelize = require("sequelize");
const FormDataModel = require("./Formdata");
const CategoryModel = require("./Category");
const IndustryModel = require("./Industry"); // Import the Industry model

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

const FormData = FormDataModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize);
const Industry = IndustryModel(sequelize, Sequelize); // Initialize the Industry model

module.exports = {
  sequelize,
  Sequelize,
  FormData,
  Category,
  Industry, // Export the Industry model
};
