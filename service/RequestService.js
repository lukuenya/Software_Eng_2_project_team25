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
 * Delete request
 * FR - The registered user must be able to delete the request that he has send. FR - The registered user must be able to delete the request that he has received.         
 *
 * userid Integer The id of the user that delete a request.
 * requestid Integer The id of the request that is going to be deleted
 * returns inline_response_200_5
 **/
exports.delreq = function(userid,requestid) {
  return new Promise(function(resolve, reject) {
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
 * Retrieve requests
 * FR - A registered user must be able to see his notifications(recieved requests). 
 *
 * userid Integer The userid of the user that views his notifications.
 * returns List
 **/
exports.getNotificationsList = function(userid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

