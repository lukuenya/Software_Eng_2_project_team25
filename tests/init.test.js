const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');

const app = require('../index.js');

const { getProfile } = require('../service/ProfileService.js');

/*test( 'GET Profile by function', async t => {
    const result = await getProfile(0,0);
    console.log(result[0])
    t.is(result[0].city, "city");

}); */


test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

test.after.always((t) =>{
    t.context.server.close();
});

test( 'Get a profile', async (t) => {
    const response = await t.context.got("user/0/profile/0").json();
    console.log(response);
}); 