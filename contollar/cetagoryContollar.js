const CetagoryList = require("../moddel/cetagorySchema");

async function createCategory(req, res) {
  try {
    const { name, description } = req.body;

    const duplicate = await CetagoryList.findOne({ name });
    if (duplicate) {
      return res.status(400).json({
        message: "Duplicate category"
      });
    }

    const category = new CetagoryList({
      name,
      description
    });

    await category.save();

    res.status(201).json({
      message: "Category created successfully",
      data: category
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

module.exports = createCategory;
