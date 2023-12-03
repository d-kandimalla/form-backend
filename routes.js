const express = require("express");
const router = express.Router();
const formDataController = require("./controllers/Formdata.controller");
const categoryController = require("./controllers/Category.controller");
const industryController = require("./controllers/Industry.controller");

router.post("/create", formDataController.createUser);
router.get("/list/:id", formDataController.getUser);
router.get("/list", formDataController.getAllUsers);
router.put("/list/:id", formDataController.updateUser);
router.get("/categories", categoryController.getAllCategories);
router.get(
  "/categories/:parentId/children",
  categoryController.getChildrenByParentId
);
router.get("/industries", industryController.getAllIndustries); // Route to get all industries
router.get("/industries/:id", industryController.getIndustryById);

module.exports = router;
