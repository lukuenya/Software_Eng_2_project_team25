'use strict';


/**
 * Add a new announcement to the system.
 * FR - A registered user must be able to create a new announcement. 
 *
 * userid Integer The userid of the user that submits a new announcement.
 * body Body_1 Announcement object that is going to be submited.
 * returns inline_response_200_2
 **/
exports.addAnnouncement = function(userid, body) {
  return new Promise(function(resolve, reject) {
    if (!userid || !body) {
      reject("Error 200, user id or body is not given");    //if userid or body is not given 
    } else {
      resolve("Announcement added successful");      //Parameters are given correctly by user
    }
  });
};



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
    if (!userid || !announcementid) {
      reject("Error 200, user id or announcement id is not given");   //If userid or announcementid is not given
    } else {
      resolve("Deletion successful");   //Parameters are given correctly by user
    }
  });
};


/**
 * Retrieve announcements
 * FR - A registered user must be able to view all job announcements. 
 *
 * userid Integer The userid of the user that views the announcements
 * title String A title that corresponds of the announcments, that user has searched
 * returns List
 **/
exports.getListAnnouncements = function(userid, title) {
  return new Promise(function(resolve, reject) {
    if (!userid || !title) {
      reject("Error 200, user id or title is not given");   //If parameters are not given correctly by user
    } else {
      var example = {
        "title": "Title",
        "experience": "1 year",
        "education": "BSc",
        "preview": "Preview",
        "salary": 1000,
        "schedule": 5
      };
    
      resolve(example);
    }
  });
};




/**
 * Update announcement
 * FR - A registered user must be able to edit one of his  announcements. 
 *
 * userid Integer The userid of the user that applies an action to the existing announcement.
 * announcementid Integer The ID of the announcement that is updated.
 * body Body_2 Announcement model
 * returns inline_response_200_2
 **/
exports.updateAnnouncement = function(userid, announcementid, body) {
  return new Promise(function(resolve, reject) {
    if (!userid || !announcementid || !body) {
      reject("Error 200, user id, announcement id, or body is not given"); // If parameters are not given correctly by user
    } else {
      var example = {
        "title": "Title",
        "experience": "3 years",
        "education": "MSc",
        "preview": "Preview",
        "salary": 1500,
        "schedule": 6
      };

      resolve("Announcement updated successful. New Announcement:", example); // Parameters are given correctly by user
    }
  });
};



