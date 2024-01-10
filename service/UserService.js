'use strict';


/**
 * Add a new user to the system.
 * FR - A  user must be able to register in the system. 
 *
 * body Body Announcement object that is going to be submited.
 * returns inline_response_200
 **/
exports.addUser = function(body) {
  return new Promise(function(resolve, reject) {
    if (!body) {
      reject("Error 200, body is not given");   //if body is not given
    } else 
    var examples = {};
    examples['application/json'] = [{
      "userid" : 1,
      "username" : "username",
      "password" : "password",}];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

