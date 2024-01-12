//Test cases for Profile
const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');
const app = require('../index.js');

const { addProfile } = require('../service/ProfileService.js');
const { getProfile } = require('../service/ProfileService.js');

const baseUrl = 'http://localhost:8080/';

test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: "json"});
});

test.after.always((t) => {
    t.context.server.close();
});

// Test case for getting a Profile by function


test("getProfile returns a profile object", async (t) => {
    const mockProfile = {
        "gender": "gender",
        "city": "city",
        "profileid": 0,
        "about": "about",
        "fullname": "fullname",
        "age": 6,
        "email": "email"
    };

    const profile = await getProfile(mockProfile);
    t.is(profile.gender);
    t.is(profile.city);
    t.is(profile.profileid);
    t.is(profile.about);
    t.is(profile.fullname);
    t.is(profile.age);
    t.is(profile.email);

});

// Test case for adding a Profile by function

// test("Post addProfile ", async (t) => {
//     const mockProfile = {
//         "gender": "gender",
//         "city": "city",
//         "profileid": 0,
//         "about": "about",
//         "fullname": "fullname",
//         "age": 6,
//         "email": "email"
//     };

//     const profile = await addProfile(mockProfile);
//     t.truthy(profile.gender);
//     t.truthy(profile.city);
//     t.truthy(profile.profileid);
//     t.truthy(profile.about);
//     t.truthy(profile.fullname);
//     t.truthy(profile.age);
//     t.truthy(profile.email);
    

// });