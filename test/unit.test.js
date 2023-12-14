/**
 * Unit tests for all services
 * @module test/unit.test.js
 * @requires module:ava
 * @requires module:test-listen
 * @requires module:got
 * 
 * @requires module:../service/UserService.js
 * @requires module:../service/AnnouncementService.js
 * @requires module:../service/ProfileService.js
 * @requires module:../service/RequestService.js
 * 
 **/

const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');

// import sevices
const {addUser} = require('../service/UserService.js');
const {addAnnouncement, deleteAnnouncement, getListAnnouncements, updateAnnouncement} = require('../service/AnnouncementService.js');
const {addProfile, getProfile, updateProfile} = require('../service/ProfileService.js');
const {addRequest, delreq, getNotificationsList, updateRequest} = require('../service/RequestService.js');
const app = require('../index.js');

test('Add one User', async t => {
    const result = await addUser();
    console.log(result);
    t.true(result.empty === false);
    t.true(result.userid === 1);
    t.true(result.username === 'John');
    t.true(result.password === '1234');
    t.true(result.email === 'john@gmail.com');
});

test.before(async t => {
    t.context.server = http.createServer(app); // Create server using app.js(in index.js) and save it to context object of test because we need to close it after test
    t.context.prefixUrl = await listen(t.context.server); // Start server and save url to context object of test
    t.context.got = got.extend({ // Create got client with base url
        prefixUrl: t.context.prefixUrl,
        responseType: 'json'
    });
});

test.after.always(async t => {
    t.context.server.close(); // Close server
}); 

test('Add User', async t => {
    const result = await got.post("user", {
        json: {
            userid: 1,
            username: 'John',
            password: '1234',
            email: 'john@gmail.com'
            }
        }).json();
    console.log(result);
    t.true(result.empty === false);
    t.true(result.userid === 1);
    t.true(result.username === 'John');
    t.true(result.password === '1234');
    t.true(result.email === 'jhon@gmail.com');
});

