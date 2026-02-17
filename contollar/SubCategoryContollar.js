const SubCategory = require("../moddel/subCategorySchema");
const CetagoryList = require("../moddel/cetagorySchema");

async function createSubCategory(req, res) {
  try {
    const { name, category, description } = req.body;

    const duplicate = await SubCategory.findOne({ name });
    if (duplicate) {
      return res.status(400).json({
        message: "Duplicate subcategory"
      });
    }

    // Create subcategory
    const subCategory = new SubCategory({
      name,
      category,
      description
    });

    await subCategory.save();

    //  Push into main category
    await CetagoryList.findByIdAndUpdate(
      category,
      {
        $push: { subcategorilist: subCategory._id }
      }
    );

    res.status(201).json({
      message: "SubCategory created successfully",
      data: subCategory
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

module.exports = createSubCategory;
