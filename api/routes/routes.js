'use strict'
module.exports = function(app) {
  var horizonController = require('../controllers/horizonController')

  app.route('/balance')
    .get(horizonController.getBalance)
}
