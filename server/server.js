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
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SESSION_SECRET
}))

// Auth Endpoints

app.post('/api/auth/register', authCtrl.register);
app.post('/api/auth/login', authCtrl.login);
app.post('/api/auth/logout', authCtrl.logout)
app.get('/api/auth/me', authCtrl.refresh)


//Post Endpoints

app.get('/api/posts', ctrl.getPosts);
app.post('/api/posts', ctrl.makePost);
app.get('/api/post/:postid', ctrl.getPost);


massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () =>
    console.log(`I got ${SERVER_PORT} problems, and they're all bugs`))
});