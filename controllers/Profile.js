'use strict';
 // Import utility functions for writing responses
var utils = require('../utils/writer.js');
var Profile = require('../service/ProfileService');

// Function to add a user profile
module.exports.addProfile = function addProfile (req, res, next) {
  var userid = req.swagger.params['userid'].value;
  var body = req.swagger.params['body'].value;
  Profile.addProfile(userid,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Function to delete a user profile
module.exports.getProfile = function getProfile (req, res, next) {
  var userid = req.swagger.params['userid'].value;
  var profileid = req.swagger.params['profileid'].value;
  Profile.getProfile(userid,profileid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Function to update a profile
module.exports.updateProfile = function updateProfile (req, res, next) {
  var userid = req.swagger.params['userid'].value;
  var profileid = req.swagger.params['profileid'].value;
  var body = req.swagger.params['body'].value;
  Profile.updateProfile(userid,profileid,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
