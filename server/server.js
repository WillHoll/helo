require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
const app = express();

// Middleware
app.use(express.json());


massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () =>
    console.log(`I got ${SERVER_PORT} problems, and they're all bugs`))
})