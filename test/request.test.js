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


test("addRequest successfully adds a request", async (t) => {
    const userid = 1;
    const mockRequest = {
        seekerUsername: "UserA",
        providerUsername: "UserB",
        JobTitle: "Software Engineer"
    };

    const request = await addRequest(userid, mockRequest);
    t.truthy(request.seekerUsername);
    t.truthy(request.providerUsername);
    t.truthy(request.JobTitle);
});

    

test("PUT Update Request function returns request object", async (t) => {
    const mockrequest = {
        "seekerUsername": "Jhon",
        "providerUsername": "LuluaSoft1",
        "JobTitle": "Software Engineer1"
    };

    const request = await updateRequest(mockrequest);
    t.is(request.seekerUsername);
    t.is(request.providerUsername);
    t.is(request.JobTitle);

});

test("addRequest returns error when required fields are missing", async (t) => {
    const userid = 1;
    const mockRequest = { seekerUsername: "UserA" }; // Missing providerUsername and JobTitle

    try {
        await RequestService.addRequest(userid, mockRequest);
        t.fail("Expected an error to be thrown");
    } catch (error) {
        t.truthy(error);
    }
});

test("Get retrieves notifications for a user", async (t) => {
    const userid = 1;

    const notifications = await getNotificationsList(userid);
    t.truthy(notifications.requestid);
    t.truthy(notifications.providerid);
});

test("delreq deletes a request", async (t) => {
    const userid = 1;
    const requestid = 101;

    // resolves without any specific return 
    await t.notThrowsAsync(async () => {
        await delreq(userid, requestid);
    });
});

// test("delreq throws error when requestid is missing", async (t) => {
//     const userid = 1;

//     try {
//         await delreq(userid);
//         t.fail("Expected an error to be thrown");
//     } catch (error) {
//         t.truthy(error);
//     }
// });