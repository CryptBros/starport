'use strict'
var request = require('request');
var stellar = require('../services/StellarService');

exports.getOperations = function(req, res) {
  var address = req.query.address;
  res.status(200).json("Not implemented yet!")
}
