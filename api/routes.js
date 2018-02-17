'use strict'
module.exports = function(app) {
  var balancesController = require('./controllers/balancesController')
  var transactionsController = require('./controllers/transactionsController')

  app.route('/balances')
    .get(balancesController.getBalances)

  app.route('/transactions')
    .get(transactionsController.getTransactions)
}
