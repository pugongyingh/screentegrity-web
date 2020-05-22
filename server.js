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

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DB Config
const db = 'mongodb+srv://pgyh:mmmmmm88@cluster0-ddyp4.mongodb.net/test?retryWrites=true&w=majority'
const keys = require('./config/keys')

const EMAIL_SECRET = 'asdf1093KMnzxcvnkljvasdu09123nlasdasdf'




app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(8080, function () {
  console.log('app is listening at port 8080');
