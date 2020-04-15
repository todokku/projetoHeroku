const express = require("express");
const consign = require('consign');
const bodyParser = require("body-parser");
//const { check, validationResult } = require('express-validator');
const expressSession = require('express-session');
const app = express();
app.set('view engine','ejs');
app.set('views', './views');
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: true}));
//app.use(expressValidator());
app.use(expressSession({
  secret: 'teste de sessao',
  resave: false,
  saveUninitialized: false
}))
consign()
  .include('model')
  .then('controller')
  .then('db')
  .then('routes')
  .into(app)
;
module.exports = app;
