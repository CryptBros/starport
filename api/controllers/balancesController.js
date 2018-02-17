'use strict'
var request = require('request');
var stellar = require('../services/StellarService');

exports.getBalances = function(req, res) {
  var address = req.query.address;
  stellar.getBalances(address, function(err, balances){
    if(!err) {
      res.status(200).json(balances)
    } else {
      console.log(err);
      res.status(420).json({"message": "Error: account does not exist!"});
    }
  })
}
