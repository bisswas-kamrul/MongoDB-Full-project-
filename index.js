const express = require('express');
const DBconection = require('./DBconection/DBconection');
const router = require('./route');
const MongoDBrouter = express();
require('dotenv').config() // (API key, DB password, DB userName ,DB Name) secret rakher jonno

// Define a route for GET requests to the root URL
// router connect
MongoDBrouter.use(router)
// router connect
MongoDBrouter.get('/', (req, res) => {
  res.send('Hello World from Express!');
});
DBconection()
// Start the server
MongoDBrouter.listen(7000, () => {
  console.log("server raning");
});

