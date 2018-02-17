'use strict'
var request = require('request');
var stellar = require('../services/StellarService');

exports.getOperations = function(req, res) {
  var address = req.query.address;
  stellar.getOperations(address, 0, function(operations) {
    var result = operations.records.map(function(op) {
      return handleOp[op.type](op)
    })
    res.status(200).json(result)
  })
}

var handleOp = {
  "payment": handlePaymentType,
  "create_account": handleCreateAccountType,
  "path_payment": handlePathPaymentType,
  "manage_offer": handleManageOfferType,
  "create_passive_offer": handleCreatePassiveOfferType,
  "set_options": handleSetOptionsType,
  "change_trust": handleChangeTrustType,
  "allow_trust": handleAllowTrustType,
  "account_merge": handleAccountMergeType,
  "inflation": handleInflationType,
  "manage_data": handleManageDataType
}

function handlePaymentType(op) {
  return {
    id: op.id,
    type: op.type,
    to: op.to,
    from: op.from,
    asset_type: op.asset_type,
    amount: op.amount
  }
}

function handleCreateAccountType(op) {
  return {
    id: op.id,
    type: op.type,
    account: op.account,
    source_account: op.source_account,
    funder: op.funder,
    starting_balance: op.starting_balance,
    created_at: op.created_at
  }
}

function handlePathPaymentType(op) {
  return op
}

function handleManageOfferType(op) {
  return op
}

function handleCreatePassiveOfferType(op) {
  return op
}

function handleSetOptionsType(op) {
  return op
}

function handleChangeTrustType(op) {
  return op
}

function handleAllowTrustType(op) {
  return op
}

function handleAccountMergeType(op) {
  return op
}

function handleInflationType(op) {
  return op
}

function handleManageDataType(op) {
  return op
}
