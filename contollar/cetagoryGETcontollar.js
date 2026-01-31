const CetagoryList = require("../moddel/cetagorySchema")
async function cetagoryGET(req,res) {
     const cetagorget = await CetagoryList.find({});
     return res.json({
      messages: "dubleceat cetagory",
      data:cetagorget
    });
}
module.exports = cetagoryGET