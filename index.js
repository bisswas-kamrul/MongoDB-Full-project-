const express = require('express');
const session = require('express-session');
const DBconection = require('./DBconection/DBconection');
const router = require('./route');
const MongoDBrouter = express();
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
// router connect
MongoDBrouter.use(router)
// router connect
MongoDBrouter.get('/', (req, res) => {
  res.send('Hello World from Express!');
});
// Start the server
DBconection()
// Start the server
MongoDBrouter.listen(7000, () => {
  console.log("server raning");
});

