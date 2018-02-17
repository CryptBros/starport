var config = require('../../config');
var StellarSdk = require('stellar-sdk');

var server = new StellarSdk.Server("https://horizon-testnet.stellar.org"); // TODO maybe turn this into a singleton class

exports.getBalances = function(address, cb) {
  try {
    server.loadAccount(address).then(function(account) {
      cb(null, account.balances);
    });
  } catch(err) {
    cb(err);
  }
}

exports.getTransactions = function(address, cursor, cb) {
  server.transactions()
    .forAccount(address)
    .cursor(cursor)
    .call().then(cb)
}

// To read the XDR on raw transactions. Includes all information about the transaction. You can also stream results :)
// var txHandler = function (txResponse) {
//     console.log( JSON.stringify(StellarSdk.xdr.TransactionEnvelope.fromXDR(txResponse.envelope_xdr, 'base64')) );
//     console.log( JSON.stringify(StellarSdk.xdr.TransactionResult.fromXDR(txResponse.result_xdr, 'base64')) );
//     console.log( JSON.stringify(StellarSdk.xdr.TransactionMeta.fromXDR(txResponse.result_meta_xdr, 'base64')) );
// };


exports.getOperations = function(address, cursor, cb) {
  server.operations()
    .forAccount(address)
    .cursor(cursor)
    .call().then(cb)
}
