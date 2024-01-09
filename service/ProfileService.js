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
    var examples = {};
    examples['application/json'] = {
      "age": "28",
      "fullname": "Matt Lulua",
      "city": "Kananga",
      "gender": "Male",
      "email": "matt@luluasoft.cd",
      "about": "I am a software engineer",
    };
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
    var examples = {};
    examples['application/json'] = {
      "age": "28",
      "fullname": "Matt Lulua",
      "city": "LuluaBourg",
      "gender": "Male",
      "email": "matt@luluasoft.cd",
      "about": "I am a software engineer",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

