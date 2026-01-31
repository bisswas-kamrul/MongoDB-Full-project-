const CetagoryList = require("../moddel/cetagorySchema");
async function cetagoryContollar(req, res) {
  const { name, description } = req.body;

  const cetagoryDubli = await CetagoryList.findOne({name});

  if (cetagoryDubli) {
    return res.json({
      messages: "dubleceat cetagory",
    });
  }
  const cetagoryCreat = CetagoryList({
    name: name,
    description: description,
  });
  cetagoryCreat.save();
  return res.json({
    message: "Category created",
  });

}

module.exports = cetagoryContollar
