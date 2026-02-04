const CetagoryList = require("../moddel/cetagorySchema")
async function cetagoryGETcontollar(req,res) {
     const cetagorget = await CetagoryList.find({});
     return res.json({
      messages: "dubleceat cetagory",
      data:cetagorget
    });
}
module.exports = cetagoryGETcontollar