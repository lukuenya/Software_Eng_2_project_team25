'use strict';


/**
 * Add a new request.
 * FR - A  user must be able to send request to other users. 
 *
 * userid Integer The userid of the user that edit his notifications.
 * body Body_5 Request object that is going to be submited.
 * returns inline_response_200_5
 **/
exports.addRequest = function(userid,body) {
  return new Promise(function(resolve, reject) {
    if (!userid || !body) {
      reject("Error 200, user id or body is not given");    //if userid or body is not given by user
    } 
    else {
      resolve("Request added successful");    //Parameters are given correctly by user
    }
  });
}


/**
 * Delete request
 * FR - The registered user must be able to delete the request that he has send. FR - The registered user must be able to delete the request that he has received.         
 *
 * userid Integer The id of the user that delete a request.
 * requestid Integer The id of the request that is going to be deleted
 * returns inline_response_200_5
 **/
exports.delreq = function(userid,requestid) {
  return new Promise(function(resolve, reject) {
    if (!userid || !requestid) {
      reject("Error 200, user id or request id is not given");   //if userid or requestid is not given
    }
    else {
      resolve("Request deleted successful");    //Parameters are given correctly by user
    }
  });
}


/**
 * Retrieve requests
 * FR - A registered user must be able to see his notifications(recieved requests). 
 *
 * userid Integer The userid of the user that views his notifications.
 * returns List
 **/
exports.getNotificationsList = function(userid) {
  return new Promise(function(resolve, reject) {
    if (!userid) {
      reject("Error 200, user id is not given");   //if userid is not given
    }
    else {
      var example = {};
    example['application/json'] = {
      "requestid": 11,
      "providerid": 11,
      "announcementid": 8,
      "seekerid": 5,
      "status": true
    };
      resolve(example);
    }
  });
}


/**
 * updateNotification(response)
 * FR - A registered user must be able to respond to his notifications (recieved requests). 
 *
 * userid Integer The userid of the user that respond to the request.
 * requestid String The id of the request that is being responded.
 * returns inline_response_200_6
 **/
exports.updateRequest = function(userid,requestid) {
  return new Promise(function(resolve, reject) {
    if (!userid || !requestid) {
      reject("Error 200, user id or request id is not given");   //if userid or requestid is not given by user
    } 
    else {
      resolve("Request updated successful");    //Parameters are given correctly by user
    }
  });
}

