const List = require("../moddel/Schema");
async function UserContollar(req ,res) {
    try {
    const users = await List.find({},"_id Firstname lastname email"); // সব user আনবে
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = UserContollar