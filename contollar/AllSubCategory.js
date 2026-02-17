const subCategorySchema = require("../moddel/subCategorySchema");

async function AllSubCategory(req, res) {
  try {
    const subCategories = await subCategorySchema
      .find()
      .populate("category", "name"); // only category name

    res.status(200).json({
      success: true,
      data: subCategories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching SubCategories",
      error: error.message,
    });
  }
}
module.exports = AllSubCategory;
