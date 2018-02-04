'use strict'
var request = require('request');
var server = require('../services/StellarService');

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

exports.getBalance = function(req, res) {
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
}
