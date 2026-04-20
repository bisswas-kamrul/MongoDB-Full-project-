const express = require('express');
const session = require('express-session');
const DBconection = require('./DBconection/DBconection');
const router = require('./route');
const MongoDBrouter = express();
const cors = require('cors');
const authMedellwer = require('./medelwearFolder/authMedellwer');
require('dotenv').config() // (API key, DB password, DB userName ,DB Name) secret rakher jonno
// Define a route for GET requests to the root URL
// fondent with bacend pages connect korte cros npm lage
MongoDBrouter.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
// fondent with bacend pages connect korte cros npm lage
MongoDBrouter.use(express.json());
// session use
MongoDBrouter.use(session({
  name: "auth_session",
  secret: "bkd@gc24",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  }
}));
// session use
// router connect
MongoDBrouter.use(router)
// router connect
// Admin rout
MongoDBrouter.get('/dashboard', authMedellwer, (req, res) => {
  res.json({ 
    message: "Admin dashboard accessed",
    user: req.session.user
  });
});
// Admin rout
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

