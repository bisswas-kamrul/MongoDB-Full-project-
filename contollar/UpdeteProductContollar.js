const ProductList = require("../moddel/productSchema");
async function UpdeteProduct(req, res) {
try {
 const { id } = req.params;
 const {
    name,
    description,
    price,
    category,
    images,
    subcategory,
    attributes,
  } = req.body;
  const updateProduct = await ProductList.findById(id);
  updateProduct.name = name;
  updateProduct.description = description;
  updateProduct.category = category;
  updateProduct.price = price;
  updateProduct.size = subcategory;
  updateProduct.color = images;
  updateProduct.ram = attributes;
  await updateProduct.save()
  
    res.status(201).json({
      message: "Product created successfully",
    });
} catch (error) {
    res.status(500).json({ message: error.message });
}
}

 
module.exports = UpdeteProduct;
