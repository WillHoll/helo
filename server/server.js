require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
const ctrl = require('./controllers/controller');
const authCtrl = require('./controllers/authController');
const app = express();

// Middleware
app.use(express.json());

// Auth Endpoints

app.post('/api/auth/register', authCtrl.register);
app.post('/api/auth/login', authCtrl.login);

//Post Endpoints

app.get('/api/posts/:userid', ctrl.getPosts);
app.post('/api/posts/:userid');
app.get('/api/posts/:postid');

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log(`database connected`)
  app.listen(SERVER_PORT, () =>
    console.log(`I got ${SERVER_PORT} problems, and they're all bugs`))
});