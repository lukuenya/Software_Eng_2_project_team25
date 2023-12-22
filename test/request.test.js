/**
 * Test for `Add a new request`
 * FR - A  user must be able to send request to other users. 
 *
 * userid Integer The userid of the user that edit his notifications.
 * body Body_5 Request object that is going to be submited.
 * returns inline_response_200_5
 **/

const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');
const app = require('../index.js');

const {addRequest, delreq, updateRequest, getNotificationsList} = require('../service/RequestService.js');


test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: "json"});
});

test.after.always((t) => {
    t.context.server.close();
});

const mockrequest = {
    "seekerUsername": "Matt",
    "providerUsername": "LuluaSoft",
    "JobTitle": "Software Engineer"
};

test("Post Add Request function returns request object", async (t) => {
    const mockrequest = {
        "seekerUsername": "Matt",
        "providerUsername": "LuluaSoft",
        "JobTitle": "Software Engineer"
    };

    const request = await addRequest(mockrequest);
    t.is(request.seekerUsername);
    t.is(request.providerUsername);
    t.is(request.JobTitle);
}
);

test("PUT Update Request function returns request object", async (t) => {
    const mockrequest = {
        "userid": 1,
        "seekerUsername": "Jhon",
        "providerUsername": "LuluaSoft1",
        "JobTitle": "Software Engineer1"
    };

    const request = await updateRequest(mockrequest);
    t.is(request.seekerUsername);
    t.is(request.providerUsername);
    t.is(request.JobTitle);
    t.is(request.userid);

});
