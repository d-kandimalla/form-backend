const db = require("./models"); // Adjust the path to your models directory
const categoriesData = [
  {
    parent: "Manufacturing",
    child: [
      {
        parent: "Construction materials",
        child: [],
      },
      {
        parent: "Electronics and Optics",
        child: [],
      },
      {
        parent: "Food and Beverage",
        child: [
          {
            parent: "Bakery & confectionery products",
            child: [],
          },
          {
            parent: "Beverages",
            child: [],
          },
          {
            parent: "Fish & fish products",
            child: [],
          },
          {
            parent: "Meat & meat products",
            child: [],
          },
          {
            parent: "Milk & dairy products",
            child: [],
          },
          {
            parent: "Other",
            child: [],
          },
          {
            parent: "Sweets & snack food",
            child: [],
          },
        ],
      },
      {
        parent: "Furniture",
        child: [
          {
            parent: "Bathroom/sauna",
            child: [],
          },
          {
            parent: "Bedroom",
            child: [],
          },
          {
            parent: "Children’s room",
            child: [],
          },
          {
            parent: "Kitchen",
            child: [],
          },
          {
            parent: "Living room",
            child: [],
          },
          {
            parent: "Office",
            child: [],
          },
          {
            parent: "Other (Furniture)",
            child: [],
          },
          {
            parent: "Outdoor",
            child: [],
          },
          {
            parent: "Project furniture",
            child: [],
          },
        ],
      },
      {
        parent: "Machinery",
        child: [
          {
            parent: "Machinery components",
            child: [],
          },
          {
            parent: "Machinery equipment/tools",
            child: [],
          },
          {
            parent: "Manufacture of machinery",
            child: [],
          },
          {
            parent: "Maritime",
            child: [
              {
                parent: "Aluminium and steel workboats",
                child: [],
              },
              {
                parent: "Boat/Yacht building",
                child: [],
              },
              {
                parent: "Ship repair and conversion",
                child: [],
              },
            ],
          },
          {
            parent: "Metal structures",
            child: [],
          },
          {
            parent: "Other",
            child: [],
          },
          {
            parent: "Repair and maintenance service",
            child: [],
          },
        ],
      },
      {
        parent: "Metalworking",
        child: [
          {
            parent: "Construction of metal structures",
            child: [],
          },
          {
            parent: "Houses and buildings",
            child: [],
          },
          {
            parent: "Metal products",
            child: [],
          },
          {
            parent: "Metal works",
            child: [
              {
                parent: "CNC-machining",
                child: [],
              },
              {
                parent: "Forgings, Fasteners",
                child: [],
              },
              {
                parent: "Gas, Plasma, Laser cutting",
                child: [],
              },
              {
                parent: "MIG, TIG, Aluminum welding",
                child: [],
              },
            ],
          },
        ],
      },
      {
        parent: "Plastic and Rubber",
        child: [
          {
            parent: "Packaging",
            child: [],
          },
          {
            parent: "Plastic goods",
            child: [],
          },
          {
            parent: "Plastic processing technology",
            child: [
              {
                parent: "Blowing",
                child: [],
              },
              {
                parent: "Moulding",
                child: [],
              },
              {
                parent: "Plastics welding and processing",
                child: [],
              },
            ],
          },
          {
            parent: "Plastic profiles",
            child: [],
          },
        ],
      },
      {
        parent: "Printing",
        child: [
          {
            parent: "Advertising",
            child: [],
          },
          {
            parent: "Book/Periodicals printing",
            child: [],
          },
          {
            parent: "Labelling and packaging printing",
            child: [],
          },
        ],
      },
      {
        parent: "Textile and Clothing",
        child: [
          {
            parent: "Clothing",
            child: [],
          },
          {
            parent: "Textile",
            child: [],
          },
        ],
      },
      {
        parent: "Wood",
        child: [
          {
            parent: "Other (Wood)",
            child: [],
          },
          {
            parent: "Wooden building materials",
            child: [],
          },
          {
            parent: "Wooden houses",
            child: [],
          },
        ],
      },
    ],
  },
  {
    parent: "Other",
    child: [
      {
        parent: "Creative industries",
        child: [],
      },
      {
        parent: "Energy technology",
        child: [],
      },
      {
        parent: "Environment",
        child: [],
      },
    ],
  },
  {
    parent: "Service",
    child: [
      {
        parent: "Business services",
        child: [],
      },
      {
        parent: "Engineering",
        child: [],
      },
      {
        parent: "Information Technology and Telecommunications",
        child: [
          {
            parent: "Data processing, Web portals, E-marketing",
            child: [],
          },
          {
            parent: "Programming, Consultancy",
            child: [],
          },
          {
            parent: "Software, Hardware",
            child: [],
          },
          {
            parent: "Telecommunications",
            child: [],
          },
        ],
      },
      {
        parent: "Tourism",
        child: [],
      },
      {
        parent: "Translation services",
        child: [],
      },
      {
        parent: "Transport and Logistics",
        child: [
          {
            parent: "Air",
            child: [],
          },
          {
            parent: "Rail",
            child: [],
          },
          {
            parent: "Road",
            child: [],
          },
          {
            parent: "Water",
            child: [],
          },
        ],
      },
    ],
  },
]; // Adjust the path to your data file

async function insertCategory(parentId, category) {
  // Create the category and get the inserted category's ID
  const createdCategory = await db.Category.create({
    name: category.parent,
    parentId: parentId,
  });

  // Insert children categories
  for (const child of category.child) {
    await insertCategory(createdCategory.id, child);
  }
}

async function insertAllCategories() {
  try {
    await db.sequelize.sync(); // Sync the database

    for (const category of categoriesData) {
      await insertCategory(null, category); // null parentId for root categories
    }

    console.log("All categories inserted successfully.");
  } catch (error) {
    console.error("Error inserting categories:", error);
  }
}

insertAllCategories();
