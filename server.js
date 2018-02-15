var express = require('express')
var app = express()
var mongoose = require('mongoose')
var config = require('./config')
var bodyParser = require('body-parser')
var routes = require('./api/routes');

// mongoose mongo connection
// mongoose.Promise = global.Promise
// mongoose.connect('mongodb://' + config.mongo.username + ':' + config.mongo.password + '@' + config.mongo.host + ':' + config.mongo.port + '/' + config.mongo.db)

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})

app.listen(config.api.port, config.api.host) // Start API

console.log('REST API started on: ' + config.api.port)

// Enable health check
app.get('/health', function(req, res) {
  res.json({
    status: "healthy"
  })
});

routes(app) // load routes

// middleware layer
app.use(function(req, res) {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  })
})
