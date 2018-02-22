const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const axios = require('axios');
const authController = require('./controllers/authController')
const userController = require('./controllers/userController')
require('dotenv').config();

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db)).catch(e => console.log("massive error",e));
const app = express();

app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: {
    //two weeks
    maxAge: 60 * 60 * 24 * 14 * 1000,
  }
}));

app.get('/auth/callback', authController.connect);
app.get('/api/user-data', userController.getUser);
app.post('/api/logout', userController.destroy);



const port = process.env.SERVER_PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));