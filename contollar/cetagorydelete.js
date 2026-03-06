const CetagoryList = require("../moddel/cetagorySchema.js");
async function cetagorydelete(req, res) {
  const deleted = await CetagoryList.findByIdAndDelete(req.params.id);

  if (!deleted) {
    return res.status(404).json({
      success: false,
      message: "Category not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Category deleted",
  });
}
module.exports = cetagorydelete;
