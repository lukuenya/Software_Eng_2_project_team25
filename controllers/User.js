'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService.js');

module.exports.addUser = function addUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  User.addUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
    res.json({ message: 'User created successfully' });
};
