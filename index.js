const express = require("express");
const Sequelize = require("sequelize");
const cors = require("cors");
const routes = require("./routes");

// Model imports
const FormDataModel = require("./models/Formdata");
const CategoryModel = require("./models/Sectors");

const app = express();
app.use(cors()); // Enable CORS for all routes and origins

// Sequelize setup
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

// Initialize models
const Formdata = FormDataModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize);

// Sync Sequelize with the database
sequelize.sync();

// Set models in the app context
app.set("models", {
  Formdata: Formdata,
  Category: Category,
});

app.get("/healthcheck", function (req, res) {
  res.send("OK");
});

// Middleware to parse JSON bodies
app.use(express.json());

// Use the routes
app.use(routes);

// Server setup
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
