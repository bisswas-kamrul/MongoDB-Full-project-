const ProductList = require("../moddel/productSchema");
async function ShowProduct(req, res) {
  const { name } = req.body;
  const ShowProduct = await ProductList.findOne({ name });
  if (!ShowProduct) {
    return res.json({
      messages: "ShowProduct is not found",
      data: ShowProduct,
    });
  }
   return res.send({
      messages:"Show productList"
    })
}
module.exports = ShowProduct;
