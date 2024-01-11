'use strict';
// Import required modules
var utils = require('../utils/writer.js');
var Request = require('../service/RequestService');

module.exports.addRequest = function addRequest (req, res, next) {
  // Extract userid and body from request parameters
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

module.exports.delreq = function delreq (req, res, next) {
  // Extract userid and requestid from request parameters
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

module.exports.getNotificationsList = function getNotificationsList (req, res, next) {
   // Extract userid from request parameters
  var userid = req.swagger.params['userid'].value;
  Request.getNotificationsList(userid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateRequest = function updateRequest (req, res, next) {
  // Extract userid and requestid from request parameters
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
