const ProductList = require("../moddel/productSchema");
async function deletProduct(req, res) {
  try {
    const { id } = req.params;
    const deletProduct = await ProductList.findByIdAndDelete(id);
    res.json({
      message: "Successfully deleted",
      data: deletProduct,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
module.exports = deletProduct;
