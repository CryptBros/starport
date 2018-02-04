var config = require('../../config');
var StellarSdk = require('stellar-sdk');;

module.exports = new StellarSdk.Server("https://horizon-testnet.stellar.org");
