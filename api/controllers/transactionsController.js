'use strict'
var request = require('request');
var stellar = require('../services/StellarService');

exports.getTransactions = function(req, res) {
  var address = req.query.address;
  stellar.getTransactions(address, 0, function(transactions) {
    var result = transactions.records.map(function(r) {
        return {
          "hash": r.hash,
          "source_account": r.source_account,
          "operation_count": r.operation_count,
          "fee_paid": r.fee_paid,
          "created_at": r.created_at
        }
    })
    res.status(200).json(result)
  })
}
