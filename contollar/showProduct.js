const ProductList = require("../moddel/productSchema");

async function ShowProduct(req, res) {
  try {
    const products = await ProductList.find();

    res.send({
      message: "Show Product List",
      data: products,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Server Error",
    });
  }
}

module.exports = ShowProduct;
