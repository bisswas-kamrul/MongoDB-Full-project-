const SubCategory = require("../moddel/subCategorySchema");
const CetagoryList = require("../moddel/cetagorySchema");
async function getSubCategoryById(req, res) {
  try {
    const { id } = req.params;

    const category = await CetagoryList.findById(id)
      .populate("subcategorilist"); // sob subcategory fetch hobe

    if (!category) {
      return res.status(404).json({ message: "Category paoa jaini" });
    }

    res.status(200).json({
      message: "SubCategory gula fetch hoyeche",
      data: category.subcategorilist
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getSubCategoryById;
