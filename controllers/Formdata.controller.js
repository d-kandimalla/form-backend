const db = require("../models/index");

exports.createUser = async (req, res) => {
  try {
    const newUser = await db.FormData.create(req.body);
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await db.FormData.findByPk(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await db.FormData.findAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateUser = async (req, res) => {
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
