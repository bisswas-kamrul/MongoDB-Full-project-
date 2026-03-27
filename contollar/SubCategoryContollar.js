const SubCategory = require("../moddel/subCategorySchema");
const CetagoryList = require("../moddel/cetagorySchema");

async function SubCategoryContollar(req, res) {
  try {
    const { name, category, description } = req.body;

    if (!name || !category) {
      return res.status(400).json({ message: "Name & Category required" });
    }

    const duplicate = await SubCategory.findOne({ name });
    if (duplicate)
      return res.status(400).json({ message: "Duplicate SubCategory" });

    const subCategory = new SubCategory({ name, category, description });
    await subCategory.save();

    // Push into main category
    await CetagoryList.findByIdAndUpdate(category, {
      $push: { subcategorilist: subCategory._id },
    });

    res.status(201).json({ message: "SubCategory created", data: subCategory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = SubCategoryContollar;