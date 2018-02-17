'use strict'
module.exports = function(app) {
  var horizonController = require('./controllers/horizonController')

  app.route('/balances')
    .get(horizonController.getBalances)
}
