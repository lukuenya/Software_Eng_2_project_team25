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
      reject("Error 200, body is not given");   //if body is not given by user
    } 
    else {
      resolve("User added successful");   //body is given by user
    }
  });
}

