'use strict'
var fs = require('fs')
var _ = require('lodash')
var yaml = require('js-yaml')

var config = module.exports = {}


function load(file) {
  var config
  try {
    config = yaml.safeLoad(fs.readFileSync(__dirname + "/" + file, "utf-8"))
  } catch(e) {
    config = {}
  }
  return config
}

_.merge(config, load('api.base.yml'))
