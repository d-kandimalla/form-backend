const { QueryTypes } = require("sequelize");
const db = require("../models/index");

exports.createForm = async (req, res) => {
  try {
    const newUser = await db.FormData.create(req.body);
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getForm = async (req, res) => {
  try {
    const user = await db.FormData.findByPk(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAllForms = async (req, res) => {
  try {
    const users = await db.FormData.findAll({ order: [["createdAt", "DESC"]] });
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateForm = async (req, res) => {
  try {
    const { id } = req.params; // Assuming the user ID is passed as a URL parameter
    const [updated] = await db.FormData.update(req.body, {
      where: { id: id },
    });

    if (updated) {
      const updatedUser = await db.FormData.findOne({ where: { id: id } });
      res.status(200).send(updatedUser);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCounts = async (req, res) => {
  try {
    const records = await db.sequelize.query(
      `SELECT s.name, count(*) total from Sectors s join FormData fd on s.id = fd.sectors
    group by s.name order by total desc`,
      {
        type: QueryTypes.SELECT,
      }
    );
    res.status(200).send(records);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
