const ProductList = require("../moddel/productSchema.js");
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

    const productExist = await ProductList.findOne({ name });
    if (productExist) {
      return res.status(404).json({ message: "dublicet product" });
    }

    const productmake = new ProductList({
      name,
      description,
      price,
      images:req.file.filename ,
      subcategory,
      attributes,
      category,
    });
    await productmake.save();
    res.status(201).json({
      message: "Product created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = productContollar
