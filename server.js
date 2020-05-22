const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const path = require('path')
const jwt = require('jsonwebtoken')
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')
const User = require('./models/User')

const app = express()






app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(8080, function () {
  console.log('app is listening at port 8080');
