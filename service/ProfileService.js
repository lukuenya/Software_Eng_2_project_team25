'use strict';


/**
 * Add a new profile to the system.
 * FR - A registered user must be able to create a new profile. 
 *
 * userid Integer The userid of the user that submits a new profile.
 * body Body_3 Profile object that is going to be submited.
 * returns inline_response_200_3
 **/
exports.addProfile = function(userid, body) {
  return new Promise(function(resolve, reject) {
    if (!userid || !body) {
      reject("Error 200, user id or body is not given");    //if userid or profileid is not given by user
    } else {
      resolve({
        "age": "20",
        "fullname": "John Doe",
        "city": "Thessaloniki",
        "gender": "Male",
        "email": "JohnDoe123456@gmail.com",
        "about": "I am a software engineer",
      });
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
exports.getProfile = function(userid,profileid) {
  return new Promise(function(resolve, reject) {
    if (!userid || !profileid) {
      reject("Error 200, user id or profile id is not given");    //if userid or profileid is not given by user
    } else 
    var examples = {};
    examples['application/json'] = [{
      "profileid" : 0,
      "age" : 13,
      "fullname" : "fullname",
      "city" : "city",
      "gender" : "gender",
      "email" : "email",
      "about" : "about",
  } ];
      resolve(example);
    
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
      reject("Error 200, user id, profile id or body is not given");   //if userid, profileid or body is not given by user
    } 
    else {
      resolve("Profile updated successful");  //Parameters are given correctly by user
    }
  });
}

