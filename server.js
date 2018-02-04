var express = require('express')
var app = express()
var mongoose = require('mongoose')
var config = require('./config')
var bodyParser = require('body-parser')
var StellarSdk = require('stellar-sdk');

// mongoose mongo connection
// mongoose.Promise = global.Promise
// mongoose.connect('mongodb://' + config.mongo.username + ':' + config.mongo.password + '@' + config.mongo.host + ':' + config.mongo.port + '/' + config.mongo.db)

var server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

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

app.get('/balance', function(req, res) {
  var address = req.query.address;
  console.log(address);
  try {
    server.loadAccount(address).then(function(account) {
      console.log('Balances for account: ' + address);
      account.balances.forEach(function(balance) {
        console.log('Type:', balance.asset_type, ', Balance:', balance.balance);
        res.status(200).json({"balance": balance.balance})
      });
    });
  } catch(err) {
    console.log(err);
    res.status(420).json({"message": "Error: account does not exist!"});
  }
});

// coinRoutes(app) // load routes

// middleware layer
app.use(function(req, res) {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  })
})
