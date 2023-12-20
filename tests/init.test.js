const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');

const app = require('../index.js');

const { addProfile } = require('../service/ProfileService.js');
const { getProfile } = require('../service/ProfileService.js');
const { addAnnouncement } = require('../service/AnnouncementService.js');
const { addUser } = require('../service/UserService.js');

const baseUrl = 'http://localhost:8080/';


// Test case for getting a Profile

test( 'GET Profile by function', async t => {
    const result = await getProfile(0,0);
    console.log(result[0])
    t.is(result[0].city, "city");

}); 


test( 'Get a profile', async (t) => {
    const response = await t.context.got("user/0/profile/0").json();
    console.log(response);
}); 

// Test case for adding a new Profile
test('POST /Profile - Add new Profile', async t => {
    const newProfile = {
        profileid: 1,
        age: 1,
        fullname: "TestName",
        city: "TestCity",
        gender: "TestMale",
        email: "testmail",
        about: "test",
    };

    try {
        const response = await t.context.got.post(`announcement`, {
            json: newProfile,
            responseType: 'json',
            throwHttpErrors: false
        });

        // Check the status code
        t.is(response.statusCode, 200, 'Response should be 200 OK');

        // Check if the response body has expected properties
        t.is(response.body.age, newProfile.age, 'Age should match');
        t.is(response.body.gender, newProfile.gender, 'Gender should match');
        t.is(response.body.email, newProfile.email, 'Email should match');
        t.is(response.body.about, newProfile.about, 'About should match');
    
        // Add more assertions as needed to validate the response
    } catch (error) {
        t.fail(`Request failed: ${error.message}`);
    }
});


// Test case for adding a new Announcement
test('POST /Announcement - Add new Announcement', async t => {
    const newAnnouncement = {
        announcementid: 1,
        userid: 1,
        title: "TestTitle",
        experience: "TestExperience",
        education: "TestEducation",
        preview: "TestPreview",
        salary: 100,
        schedule: 10,
    };

    try {
        const response = await t.context.got.post(`announcement`, {
            json: newAnnouncement,
            responseType: 'json',
            throwHttpErrors: false
        });

        // Check the status code
        t.is(response.statusCode, 200, 'Response should be 200 OK');

        // Check if the response body has expected properties
        t.is(response.body.title, newAnnouncement.title, 'Title should match');
        t.is(response.body.salary, newAnnouncement.salary, 'Salary should match');
        t.is(response.body.education, newAnnouncement.education, 'Education should match');
        t.is(response.body.preview, newAnnouncement.preview, 'Preview should match');

        // Add more assertions as needed to validate the response
    } catch (error) {
        t.fail(`Request failed: ${error.message}`);
    }
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


test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

test.after.always((t) =>{
    t.context.server.close();
});

