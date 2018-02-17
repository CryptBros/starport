'use strict'
var request = require('request');
var stellar = require('../services/StellarService');

exports.getCoins = function(req, res) {
  Coin.find({}, function(err, coins) {
    res.status(200).json(coins)
  })
}

exports.getCoinInfo = function(req, res) {
  CoinInfo.find({}, function(err, coinInfo) {
    res.status(200).json(coinInfo)
  })
}

exports.getBalances = function(req, res) {
  var address = req.query.address;
  stellar.getBalances(address, function(err, balances){
    if(!err) {
      res.status(200).json({"account_balances": balances})
    } else {
      res.status(420).json({"message": "Error: account does not exist!"});
    }
  })
}
