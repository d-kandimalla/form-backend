const Sequelize = require("sequelize");
const FormDataModel = require("./Formdata");
const SectorsModel = require("./Sectors");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

const FormData = FormDataModel(sequelize, Sequelize);
const Sectors = SectorsModel(sequelize, Sequelize);

module.exports = {
  sequelize,
  Sequelize,
  FormData,
  Sectors,
};
