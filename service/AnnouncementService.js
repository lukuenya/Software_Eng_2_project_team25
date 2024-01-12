'use strict';


/**
 * Add a new announcement to the system.
 * FR - A registered user must be able to create a new announcement. 
 *
 * userid Integer The userid of the user that submits a new announcement.
 * body Body_1 Announcement object that is going to be submited.
 * returns inline_response_200_2
 **/
exports.addAnnouncement = function(userid,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    // Check if examples exist and resolve with the appropriate response
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Announcement
 * This can only be done by the same user that created
 *
 * userid Long The user id
 * announcementid Long The user id
 * no response value expected for this operation
 **/
exports.deleteAnnouncement = function(userid,announcementid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve announcements
 * FR - A registered user must be able to view all job announcements. 
 *
 * userid Integer The userid of the user that views the announcements
 * title String A title that corresponds of the announcments, that user has searched
 * returns List
 **/
exports.getListAnnouncements = function(userid,title) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    // Check if examples exist and resolve with the appropriate response
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update announcement
 * FR - A registered user must be able to edit one of his  announcements. 
 *
 * userid Integer The userid of the user that applies an action to the existing announcement.
 * announcementid Integer The ID of the announcement that is updated.
 * body Body_2 Announcement model
 * returns inline_response_200_2
 **/

// Function to update an announcement
exports.updateAnnouncement = function(userid,announcementid,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    // Check if examples exist and resolve with the appropriate response
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

