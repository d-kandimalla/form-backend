// controllers/categoryController.js
const db = require("../models/index");

exports.getAllSectors = async (req, res) => {
  try {
    const sectors = await db.Sectors.findAll({
      where: { parentId: null }, // Get only root categories
    });
    res.status(200).json(sectors);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

exports.getChildrenByParentId = async (req, res) => {
  try {
    const { parentId } = req.params;
    const children = await db.Sectors.findAll({
      where: { parentId: parentId },
    });
    res.status(200).json(children);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
