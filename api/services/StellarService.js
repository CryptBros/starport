var config = require('../../config');
var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

exports.getBalances = function(address, cb) {
  try {
    server.loadAccount(address).then(function(account) {
      console.log('Balances for address: ' + address);
      cb(null, account.balances);
    });
  } catch(err) {
    console.log(err);
    cb({"message": "Error: address does not exist!"});
  }
}
