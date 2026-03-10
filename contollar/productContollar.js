const ProductList = require("../moddel/productSchema.js");
const cloudinary = require("../medelwearFolder/cloudinary");
const fs = require("fs");

async function productContollar(req, res) {
  try {

    const { name, description, price, category, subcategory, attributes } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name field is required" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    const result = await cloudinary.uploader.upload(req.file.path);

    fs.unlinkSync(req.file.path);

    const productExist = await ProductList.findOne({ name });

    if (productExist) {
      return res.status(400).json({ message: "Duplicate product" });
    }

    const productmake = new ProductList({
      name,
      description,
      price,
      category,
      subcategory,
      attributes,
      images: [result.secure_url], // ✅ correct
    });

    await productmake.save();

    res.status(201).json({
      message: "Product created successfully",
      data: productmake,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = productContollar;