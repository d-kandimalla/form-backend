// industryController.js

// Function to get all industries
const getAllIndustries = async (req, res) => {
  try {
    const industries = await req.app.get("models").Industry.findAll();
    res.status(200).json(industries);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Function to get a single industry by ID
const getIndustryById = async (req, res) => {
  try {
    const industry = await req.app
      .get("models")
      .Industry.findByPk(req.params.id);
    if (industry) {
      res.status(200).json(industry);
    } else {
      res.status(404).send("Industry not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllIndustries,
  getIndustryById,
};
