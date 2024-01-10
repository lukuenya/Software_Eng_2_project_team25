'use strict';


/**
 * Add a new profile to the system.
 * FR - A registered user must be able to create a new profile. 
 *
 * userid Integer The userid of the user that submits a new profile.
 * body Body_3 Profile object that is going to be submited.
 * returns inline_response_200_3
 **/
exports.addProfile = function(userid,body) {
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
 * View a certain profile
 * FR - A registered user must be able to view every profile. 
 *
 * userid Integer The userid of the user that view someone's profile.
 * profileid String The ID of the profile that is beeing viewed.
 * returns inline_response_200_3
 **/
exports.getProfile = function(userid,profileid) {
  return new Promise(function(resolve, reject) {
    if (!userid || !profileid) {
      reject("Error 200, user id or profile id is not given");    //if userid or profileid is not given
    } else {
     resolve("Profile got successful");    //if both parameters are given
    }
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
 * Update Profile
 * FR - A registered user must be able to edit his own profile. 
 *
 * userid Integer The userid of the user that edit his profile.
 * profileid Integer The ID of the profile that is updated.
 * body Body_4 Profile model
 * returns inline_response_200_3
 **/
exports.updateProfile = function(userid,profileid,body) {
  return new Promise(function(resolve, reject) {
    if (!userid || !profileid || !body) {
      reject("Error 200, user id, profile id or body is not given");   //if userid, profileid or body is not given
    } else {
      resolve("Profile updated successful");   //if all parameters are given
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

