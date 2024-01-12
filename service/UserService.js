'use strict';


/**
 * Add a new user to the system.
 * FR - A  user must be able to register in the system. 
 *
 * body Body Announcement object that is going to be submited.
 * returns inline_response_200
 **/
exports.addUser = function(userBody) {
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

