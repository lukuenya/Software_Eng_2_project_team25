// Test cases for user creation(Post /user)
const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');
const app = require('../index');

const { addUser } = require('../service/UserService.js');

const baseUrl = 'http://localhost:8080/';

test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: "json"});
});

test.after.always((t) => {
    t.context.server.close();
});

// Test case for adding a new user
test('POST /user - Add new user', async t => {
    const newUser = {
        username: "testuser",
        password: "password",
        userid: 1,
    };

    try {
        const response = await t.context.got.post(`user`, {
            json: newUser,
            responseType: 'json',
            throwHttpErrors: false
        });

        // Check the status code
        t.is(response.statusCode, 200, 'Response should be 200 OK');

        // Check if the response body has expected properties
        t.is(response.body.username, newUser.username, 'Username should match');
        t.is(response.body.email, newUser.email, 'Email should match');

        // Add more assertions as needed to validate the response
    } catch (error) {
        t.fail(`Request failed: ${error.message}`);
    }
});
