const ProductList = require("../moddel/productSchema");
const cloudinary = require("../medelwearFolder/cloudinary");
const fs = require("fs");

const updateProduct = async (req, res) => {

  try {
    const { id } = req.params;

    const { name, description, price ,category ,subcategory ,attributes} = req.body;

    const updateData = {
      name,
      description,
      price,
      category,
      subcategory,
      attributes,
    };

    if (req.file) {

      const result = await cloudinary.uploader.upload(req.file.path);

      fs.unlinkSync(req.file.path);

      updateData.images = [result.secure_url];

    }

    const updatedProduct = await ProductList.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    res.json({
      message: "Product Updated Successfully",
      data: updatedProduct
    });

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};

module.exports = updateProduct;