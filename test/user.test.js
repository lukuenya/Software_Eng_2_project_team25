// Test cases for user creation(Post /user)
const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');
const app = require('../index.js');

// Import the service functions
const {addUser} = require('../service/UserService');

// Start the server and create a prefixUrl
test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({prefixUrl: t.context.prefixUrl, responseType: "json"});
});

// Close the server after each test
test.after.always((t) => {
    t.context.server.close();
});
 // Test with valid input
const mockuser = {
    username: "testuser",
    password: "testpassword"
};

// Test Add User and return user object
test ("Post Add User function returns user object", async (t) => {
    const mockuser = {
        "username": "testuser",
        "password": "testpassword"
    };

    const user = await addUser(mockuser);
    t.truthy(user.username);
    t.truthy(user.password);
});


// Test Missing username
test("addUser returns error when username is missing", async (t) => {
    const mockuser = { password: "testpassword" };
    try {
        await addUser(mockuser);
        t.fail("Expected an error to be thrown");
    } catch (error) {
        t.truthy(error);
    }
});


// Test Missing password
test("addUser returns error when password is missing", async (t) => {
    const mockuser = { username: "testuser" };
    try {
        await addUser(mockuser);
        t.fail("Expected an error to be thrown");
    } catch (error) {
        t.truthy(error);
    }
});


// Test Missing username and password
test("addUser returns error with empty input", async (t) => {
    const mockuser = {};
    try {
        await addUser(mockuser);
        t.fail("Expected an error to be thrown");
    } catch (error) {
        t.truthy(error);
    }
});


// Test with invalid schema (additional property)
test("addUser returns error with invalid input structure", async (t) => {
    const mockuser = { invalidField: "invalid" };
    try {
        await addUser(mockuser);
        t.fail("Expected an error to be thrown");
    } catch (error) {
        t.truthy(error);
    }
});



