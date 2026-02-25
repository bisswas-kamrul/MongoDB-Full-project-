const ProductList = require("../moddel/productSchema.js");
const cloudinary = require("../medelwearFolder/cloudinary");
const fs = require("fs");
async function productContollar(req, res) {
  try {
    const {
      name,
      description,
      price,
      category,
      images,
      subcategory,
      attributes,
    } = req.body;
    // check if name is provided
    if (!name) {
      return res.status(400).json({ message: "Name field is required" });
    }

    // check if image is uploaded
    if (!req.file || !req.file.filename) {
      return res.status(400).json({ message: "Image file is required" });
    }
    const imageName = req.file.filename; //img uplod korrar ketrre  difinde kora lage
    const result = await cloudinary.uploader.upload(req.file.path); //  cloudinary uplod kortte lage
    fs.unlinkSync(req.file.path); //  uploadFloder a images jabe na ei coder maddome
    const productExist = await ProductList.findOne({ name });
    if (productExist) {
      return res.status(404).json({ message: "dublicet product" });
    }

    const productmake = new ProductList({
      name,
      description,
      price,
      images: `http://localhost:7000/UploaderFolder/${req.file.filename}`,
      subcategory,
      attributes,
      category,
    });
    await productmake.save();
    res.status(201).json({
      message: "Product created successfully",
      images: imageName,
      url: result.secure_url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = productContollar;
