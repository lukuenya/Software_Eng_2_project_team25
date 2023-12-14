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
    var examples = {};
    examples['application/json'] ={
      "empty": false,
      "userid": 1,
      "username": "John",
      "password": "1234",
      "email": "john@gmail.com",
      };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

