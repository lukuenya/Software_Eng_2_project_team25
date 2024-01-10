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
    if (!userid || !body) {
      reject("Error 200, user id or body is not given");    //if userid or body is not given
    } else {
     resolve("Addition successful");    //if both parameters are given
    }
    var examples = {};
    examples['application/json'] = {"empty": false};
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
    if (!userid || !announcementid) {
      reject("Error 200, User id or Announcement id is not given");   //if userid or announcementid is not given
    } else {

      resolve("Deletion successful");   //if both parameters are given
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
exports.getListAnnouncements = function(userid,title) {
  return new Promise(function(resolve, reject) {
    if (!userid || !title) {
      reject("Error 200, User id or Title is not given");   //if userid or title is not given
    } else {
      resolve("Announcement got successful");   //if both parameters are given
    }
    var examples = {};
    examples['application/json'] = {
      "title" : "Titlos",
      "description" : "Software Engineering II",
      "salary" : 1000,
      "location" : "Kinshasa",
      "category" : "IT",
      "company" : "Luluasoft",
      "userid" : 1,
      "announcementid" : 1,
      "empty" : false
    };
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
exports.updateAnnouncement = function(userid,announcementid,body) {
  return new Promise(function(resolve, reject) {
    if (!userid || !announcementid || !body) {
      reject("Error 200, User id, Announcement id or body is not given");   //if userid, announcementid or body is not given
    } else {
      resolve("Announcement updated successful");   //if all parameters are given
    }
    var examples = {};
    examples['application/json'] = {
      "title" : "Titlos 2",
      "description" : "Software Engineering II",
      "salary" : 1000,
      "location" : "Kinshasa",
      "category" : "IT",
      "company" : "Luluasoft",
      "userid" : 1,
      "announcementid" : 1,
      "empty" : false
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
} 

