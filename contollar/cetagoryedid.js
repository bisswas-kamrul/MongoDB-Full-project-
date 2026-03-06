const CetagoryList = require("../moddel/cetagorySchema.js");

async function edid(req, res) {
  try {
    const { id } = req.params; // URL থেকে id
    const { name, description } = req.body; // body থেকে data

    const category = await CetagoryList.findById(id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Update fields
    category.name = name || category.name;
    category.description = description || category.description;

    await category.save();

    res.status(200).json({
      message: "Category updated successfully",
      data: category,
    });

  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = edid;
