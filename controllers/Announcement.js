'use strict';

// Import utility functions for writing responses
var utils = require('../utils/writer.js');

// Import the Announcements service
var Announcement = require('../service/AnnouncementService');

// Function to add an announcement
module.exports.addAnnouncement = function addAnnouncement (req, res, next) {
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

// Function to delete an announcement
module.exports.deleteAnnouncement = function deleteAnnouncement (req, res, next) {
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

// Function to get an announcement
module.exports.getListAnnouncements = function getListAnnouncements (req, res, next) {
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

// Function to update an announcement
module.exports.updateAnnouncement = function updateAnnouncement (req, res, next) {
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
