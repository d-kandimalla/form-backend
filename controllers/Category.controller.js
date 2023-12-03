// controllers/categoryController.js
const db = require("../models/index");

exports.getAllCategories = async (req, res) => {
  try {
    console.log(db.Category);
    const categories = await db.Category.findAll({
      where: { parentId: null }, // Get only root categories
    });
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.getChildrenByParentId = async (req, res) => {
  try {
    const { parentId } = req.params;
    const children = await db.Category.findAll({
      where: { parentId: parentId },
    });
    res.status(200).json(children);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
