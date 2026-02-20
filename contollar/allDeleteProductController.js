const ProductList = require("../moddel/productSchema.js");
async function allDeleteProductController(req, res) {
  try {
    // Delete all products
    const AllDelete = await ProductList.deleteMany({});

    // Send response
    res.status(200).json({
      success: true,
      message: "All products have been deleted successfully!",
      deletedCount: AllDelete.deletedCount, // shows how many were deleted
    });
  } catch (error) {
    console.error("Error deleting products:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete products.",
      error: error.message,
    });
  }
}
module.exports = allDeleteProductController;
