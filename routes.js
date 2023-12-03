const express = require("express");
const router = express.Router();
const formDataController = require("./controllers/Formdata.controller");
const sectorsController = require("./controllers/Sectors.controller");

router.post("/create", formDataController.createForm);
router.get("/list/:id", formDataController.getForm);
router.get("/list", formDataController.getAllForms);
router.put("/list/:id", formDataController.updateForm);
router.get("/sectors", sectorsController.getAllSectors);
router.get(
  "/sectors/:parentId/children",
  sectorsController.getChildrenByParentId
);

module.exports = router;
