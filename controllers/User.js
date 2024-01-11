'use strict';

// Import utility functions for writing responses
var utils = require('../utils/writer.js');
var User = require('../service/UserService');

// Function to add a user
module.exports.addUser = function addUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  User.addUser(body) // Call the service function
    .then(function (response) {
      utils.writeJson(res, response); // Write the response
    })
    .catch(function (response) {
      utils.writeJson(res, response); // Write the error response
    });
};
