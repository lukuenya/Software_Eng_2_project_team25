'use strict';


/**
 * Add a new profile to the system.
 * FR - A registered user must be able to create a new profile. 
 *
 * userid Integer The userid of the user that submits a new profile.
 * body Body_3 Profile object that is going to be submited.
 * returns inline_response_200_3
 **/
exports.addProfile = function(submittingUserId, profileBody) {
  return new Promise(function(resolve, reject) {
    var responseExamples = {};
    responseExamples['application/json'] = {"empty": false};
    if (Object.keys(responseExamples).length > 0) {
      resolve(responseExamples[Object.keys(responseExamples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * View a certain profile
 * FR - A registered user must be able to view every profile. 
 *
 * userid Integer The userid of the user that view someone's profile.
 * profileid String The ID of the profile that is beeing viewed.
 * returns inline_response_200_3
 **/
exports.getProfile = function(viewingUserId, targetProfileId) {
  return new Promise(function(resolve, reject) {
    var responseExamples = {};
    responseExamples['application/json'] = {"empty": false};
    if (Object.keys(responseExamples).length > 0) {
      resolve(responseExamples[Object.keys(responseExamples)[0]]);
    } else {
      resolve();
    }
  });
};


/**
 * Update Profile
 * FR - A registered user must be able to edit his own profile. 
 *
 * userid Integer The userid of the user that edit his profile.
 * profileid Integer The ID of the profile that is updated.
 * body Body_4 Profile model
 * returns inline_response_200_3
 **/
exports.updateProfile = function(editingUserId, targetProfileId, updatedProfile) {
  return new Promise(function(resolve, reject) {
    var responseExamples = {};
    responseExamples['application/json'] = {"empty": false};
    if (Object.keys(responseExamples).length > 0) {
      resolve(responseExamples[Object.keys(responseExamples)[0]]);
    } else {
      resolve();
    }
  });
};

