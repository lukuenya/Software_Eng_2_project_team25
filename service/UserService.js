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
//       "empty": false,
//       "userid": 1,
//       "username": "John",
//       "password": "1234",
//       "email": "john@gmail.com",
//       };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }
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
    if (!body) {
      reject("Error 200, body is not given");   //if body is not given
    } else {
      resolve("User added successful");   //if parameter is given
    }
    var examples = {};
    examples['application/json'] = [{
      "userid" : 1,
      "username" : "username",
      "password" : "password",}];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      // If validation passes, resolve with the user object
      resolve({ "username": body.username, "password": body.password });
    }
  });
}
