'use strict';


/**
 * Add a new user to the system.
 * FR - A  user must be able to register in the system. 
 *
 * body Body Announcement object that is going to be submited.
 * returns inline_response_200
 **/
// exports.addUser = function(body) {
//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] ={
//       "username": "Matt",
//       "password": "123",
//       };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }

exports.addUser = function(body) {
  return new Promise(function(resolve, reject) {
    // Example validation: check if username and password are provided
    if (!body.username || !body.password) {
      reject({ error: "Username or password is missing" });
    } else {
      // If validation passes, resolve with the user object
      resolve({ "username": body.username, "password": body.password });
    }
  });
}
