const SubProduct = require ('../moddel/subProductSchema.js')
const ProductList = require ('../moddel/productSchema.js')
async function SubProductContollar(req, res) {
try {
  const {name , description ,  images ,price , category} = req.body
  // duplicate mane hosse aktar besi product jabe na
  const duplicate = await SubProduct.findOne({name})
  if (duplicate) {
    return res.status(400).json({
      message:"duplicate product"
    })
  }
  // Create subcategory
  const subProductCreate = await SubProduct({
    name,
    description,
    images,
    price,
  })
  await subProductCreate.save()
//  Push into main category
await ProductList.findByIdAndUpdate(
  category,{
    $push:{subProducts:subProductCreate._id}
  }
)
  res.status(201).json({
      message: "SubCategory created successfully",
      data:subProductCreate
    });
} catch (error) {
  res.status(500).json({
    message:error.message
  })
}

}
module.exports = SubProductContollar