'use strict';

// Import utility functions for writing responses
var responseUtils = require('../utils/writer.js');
var userService = require('../service/UserService');

// Function to add a user
module.exports.addUser = function addUser(req, res, next) {
  var userDetails = req.swagger.params['body'].value;

  userService.addUser(userDetails) // Call the service function
    .then(function (userResponse) {
      responseUtils.writeJson(res, userResponse); // Write the response
    })
    .catch(function (errorResponse) {
      responseUtils.writeJson(res, errorResponse); // Write the error response
    });
};
