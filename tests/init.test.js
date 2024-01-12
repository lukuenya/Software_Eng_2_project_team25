const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');
const app = require('../index.js');

// Import functions from services
const { addUser } = require('../service/UserService.js');
const { getNotificationsList } = require('../service/RequestService.js');
const { getProfile } = require('../service/ProfileService.js');

// Setup before tests
test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

// Cleanup after tests
test.after.always((t) => {
    t.context.server.close();
});

// Example tests
test('Random test', t => {
    t.pass();
});

test('Async', async t => {
    const res = Promise.resolve('test');
    t.is(await res, 'test');
});

test('Test value', async (t) => {
    const a = 1;
    t.is(a + 1, 2);
});

// Custom test utilities
const sum = (a, b) => a + b;

// Test for sum function
test('Sum of 2 numbers', (t) => {
    t.plan(2);
    t.pass('this assertion passed');
    t.is(sum(1, 2), 3);
});

// Test for GET request to /test-url
test('GET /test-url returns correct response and status code', async (t) => {
    const url = "http://localhost:8080";
    const { body, statusCode } = await t.context.got(`general/test-url?url=${url}`);
    t.is(body.status, 200);
    t.assert(body.active);
    t.is(statusCode, 200);
});

// Test for adding a new user
test('Add User', async (t) => {
    const newuser = { username: 'testuser', password: 'testpassword', email: 'test1@gmail.com' };
    const { body, statusCode } = await t.context.got.post('users/create', { json: newuser });
    t.assert(body.success);
    t.is(statusCode, 200);
});

// Test for getting notifications list
test('Get Notifications', async t => {
    const result = await getNotificationsList();
    t.is(result.length, 3);
    t.is(result[0].userid, 0);
});

// Test for GET request to /userid/0/request
test('Get Notifications', async (t) => {
    const { body, statusCode } = await t.context.got('userid/0/request');
    // Check response
    t.assert(body.success);
    t.is(statusCode, 200);
});

// Test for profile function
test('get Profile', async (t) => {
    const { response } = await t.context.got('profileid/0');
    console.log(response);
});
