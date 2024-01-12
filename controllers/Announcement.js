'use strict';

// Import required modules
var utils = require('../utils/writer.js');
var Announcement = require('../service/AnnouncementService');

module.exports.addAnnouncement = function addAnnouncement (req, res, next) {
  // Extract userid and body from request parameters
  var userid = req.swagger.params['userid'].value;
  var body = req.swagger.params['body'].value;
  
  Announcement.addAnnouncement(userid,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAnnouncement = function deleteAnnouncement (req, res, next) {
  // Extract userid and announcementid from request parameters
  var userid = req.swagger.params['userid'].value;
  var announcementid = req.swagger.params['announcementid'].value;
  
  Announcement.deleteAnnouncement(userid,announcementid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getListAnnouncements = function getListAnnouncements (req, res, next) {
  // Extract userid and title from request parameters
  var userid = req.swagger.params['userid'].value;
  var title = req.swagger.params['title'].value;
  
  Announcement.getListAnnouncements(userid,title)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAnnouncement = function updateAnnouncement (req, res, next) {
  // Extract userid, announcementid, and body from request parameters
  var userid = req.swagger.params['userid'].value;
  var announcementid = req.swagger.params['announcementid'].value;
  var body = req.swagger.params['body'].value;
  
  Announcement.updateAnnouncement(userid,announcementid,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
