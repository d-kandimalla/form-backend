const Sequelize = require("sequelize");
const IndustryModel = require("./models/Industry"); // Adjust the path as needed

// Database setup
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite", // Replace with your database file path
});

// Initialize the Industry model
const Industry = IndustryModel(sequelize, Sequelize);

const data = [
  "Manufacturing",
  " Construction materials",
  " Electronics and Optics",
  " Food and Beverage",
  "  Bakery & confectionery products",
  "  Beverages",
  "  Fish & fish products",
  "  Meat & meat products",
  "  Milk & dairy products",
  "  Other",
  "  Sweets & snack food",
  " Furniture",
  "  Bathroom/sauna",
  "  Bedroom",
  "  Children’s room",
  "  Kitchen",
  "  Living room",
  "  Office",
  "  Other (Furniture)",
  "  Outdoor",
  "  Project furniture",
  " Machinery",
  "  Machinery components",
  "  Machinery equipment/tools",
  "  Manufacture of machinery",
  "  Maritime",
  "   Aluminium and steel workboats",
  "   Boat/Yacht building",
  "   Ship repair and conversion",
  "  Metal structures",
  "  Other",
  "  Repair and maintenance service",
  " Metalworking",
  "  Construction of metal structures",
  "  Houses and buildings",
  "  Metal products",
  "  Metal works",
  "   CNC-machining",
  "   Forgings, Fasteners",
  "   Gas, Plasma, Laser cutting",
  "   MIG, TIG, Aluminum welding",
  " Plastic and Rubber",
  "  Packaging",
  "  Plastic goods",
  "  Plastic processing technology",
  "   Blowing",
  "   Moulding",
  "   Plastics welding and processing",
  "  Plastic profiles",
  " Printing",
  "  Advertising",
  "  Book/Periodicals printing",
  "  Labelling and packaging printing",
  " Textile and Clothing",
  "  Clothing",
  "  Textile",
  " Wood",
  "  Other (Wood)",
  "  Wooden building materials",
  "  Wooden houses",
  "Other",
  " Creative industries",
  " Energy technology",
  " Environment",
  "Service",
  " Business services",
  " Engineering",
  " Information Technology and Telecommunications",
  "  Data processing, Web portals, E-marketing",
  "  Programming, Consultancy",
  "  Software, Hardware",
  "  Telecommunications",
  " Tourism",
  " Translation services",
  " Transport and Logistics",
  "  Air",
  "  Rail",
  "  Road",
  "  Water",
];

// Function to store the data
async function storeData() {
  try {
    await sequelize.sync(); // This will create the table if it doesn't exist

    for (let item of data) {
      // Splitting each item into category and subcategory
      let parts = item.split(" - ");
      let category = parts[0].trim();
      let subcategory = parts.length > 1 ? parts[1].trim() : null;

      await Industry.create({ category, subcategory });
    }

    console.log("Data stored successfully.");
  } catch (error) {
    console.error("Error storing data:", error);
  } finally {
    await sequelize.close(); // Close the database connection
  }
}

// Run the function
storeData();
