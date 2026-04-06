const express = require('express');
const session = require('express-session');
const DBconection = require('./DBconection/DBconection');
const router = require('./route');
const MongoDBrouter = express();
const cors = require('cors')
require('dotenv').config() // (API key, DB password, DB userName ,DB Name) secret rakher jonno
// Define a route for GET requests to the root URL
// session use
MongoDBrouter.use(session({
  name: "auth_session",
  secret: 'bkd@gc24',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production', maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}))
// session use
// fondent with bacend pages connect korte cros npm lage
MongoDBrouter.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
// fondent with bacend pages connect korte cros npm lage
// router connect
MongoDBrouter.use(router)
// router connect
//  login route
MongoDBrouter.post("/Login", (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ message: "Username required" });
  req.session.user = { name: username };
  res.status(200).json({ message: "Login successful" });
});
//  login route
// Logout route
MongoDBrouter.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Logout error:", err);
      return res.status(500).json({ message: 'Logout failed' });
    }
    res.clearCookie("auth_session"); // must match session name
    res.status(200).json({ message: "Logout successful" });
  });
});
// Logout route
// router test root
MongoDBrouter.get('/', (req, res) => {
  res.send('Hello World from Express!');
});
// router test root
// Static route
MongoDBrouter.use("/uploads", express.static("UploaderFolder")); // static route দিয়ে image browser এ দেখানোর সম্পূর্ণ 
// Static route
// Start the server
DBconection()
// Start the server
MongoDBrouter.listen(7000, () => {
  console.log("server raning");
});

