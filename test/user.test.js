// Test cases for user creation(Post /user)
const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');
const app = require('../index');

const UserService = require('../service/UserService');


test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: "json"});
});

test.after.always((t) => {
    t.context.server.close();
});

const mockuser = {
    userid: 3,
    username: "testuser",
    password: "testpassword"
};

// Test cases for user creation(Post /user)
test('POST /user Add New User return success with required fields', async (t) => {
    t.timeout(50000);
    const newUserID = 15;
    mockuser.userid = newUserID;

    try {
        const {body, statusCode} = await t.context.got.post(`user/`, {
            json: mockuser,
        });
        // Assertions
        console.log(body);
        t.is(statusCode, 200, 'Should return 200');
        t.is(body.userid, newUserID);
        t.is(body.username, mockuser.username);
        t.is(body.password, mockuser.password);
    } catch (error) {
        t.fail(`Request failed: ${error.message}`);
    }
});


// Test cases for user creation(Post /user)
test('Add User', async t => {
    try {
      await UserService.addUser(mockuser);
      t.pass();
    } catch (error) {
      t.fail(`Promise was rejected with: ${error.message}`);
    }
  });