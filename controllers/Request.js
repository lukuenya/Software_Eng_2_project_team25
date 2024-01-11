'use strict';

// Import utility functions for writing responses
var utils = require('../utils/writer.js');
var Request = require('../service/RequestService');

// Function to add a Request
module.exports.addRequest = function addRequest (req, res, next) {
  var userid = req.swagger.params['userid'].value;
  var body = req.swagger.params['body'].value;
  Request.addRequest(userid,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Function to delete a Request
module.exports.delreq = function delreq (req, res, next) {
  var userid = req.swagger.params['userid'].value;
  var requestid = req.swagger.params['requestid'].value;
  Request.delreq(userid,requestid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Function to get a Notification List
module.exports.getNotificationsList = function getNotificationsList (req, res, next) {
  var userid = req.swagger.params['userid'].value;
  Request.getNotificationsList(userid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Function to update a Request
module.exports.updateRequest = function updateRequest (req, res, next) {
  var userid = req.swagger.params['userid'].value;
  var requestid = req.swagger.params['requestid'].value;
  Request.updateRequest(userid,requestid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
