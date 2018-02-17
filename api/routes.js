'use strict'
module.exports = function(app) {
  var balancesController = require('./controllers/balancesController')
  var transactionsController = require('./controllers/transactionsController')
  var operationsController = require('./controllers/operationsController')

  app.route('/balances')
    .get(balancesController.getBalances)

  app.route('/transactions')
    .get(transactionsController.getTransactions)

  app.route('/operations')
    .get(operationsController.getOperations)
}
