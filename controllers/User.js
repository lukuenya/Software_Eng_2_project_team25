'use strict';

// Import required modules
var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.addUser = function addUser (req, res, next) {
   // Extract user information from the request body
  var body = req.swagger.params['body'].value;
  User.addUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
