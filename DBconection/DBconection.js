const mongoose = require("mongoose");

function DBconection() {
  // MongoDB Conection
  mongoose
    .connect(
      // "mongodb+srv://Learning-Mern-2407:Learning@cluster0.mwrwkud.mongodb.net/Learning-Mern-2407?appName=Cluster0" ||frist potdote connect mongodb
      //    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.mwrwkud.mongodb.net/${process.env.MONGODB_NAME}?appName=Cluster0` ||2nd podote connect mongodb
      `${process.env.DB_URL}`
    )

    .then(() => console.log("Connected!"));
  // MongoDB Conection
}
module.exports = DBconection;
