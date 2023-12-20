const http = require('http');
const test = require('ava').default;
const listen = require('test-listen');
const got = require('got');
const app = require('../index.js');


test.before(async (t) =>{
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json'});
  });
  
  
  test.after.always((t) => {
      t.context.server.close();
  });


//test GetNotificationList function
const {getNotificationsList} =require('../service/RequestService.js');



test('Get Notifications', async t => {
   const result = await getNotificationsList();
   t.is(result.length, 2);
   t.is(result[0].userid , 0);
});


test('Get Notifications 2' ,async (t) => {
   const {body , statusCode}= await t.context.got("userid/0/requests").json();
   console.log(body);
   console.log(statusCode);
   t.is(body.length, 2);
   t.is(body[0].userid , 0);
   t.is(statusCode, 200);
});



//test AddRequest function
const {addRequest} =require('../service/RequestService.js');

test('Add Request Test', async t => {
    const result = await delreq();
    t.pass();
 }); 


//test DeleteRequest function
const {delreq} =require('../service/RequestService.js');

test('Delete Request Test', async t => {
    const result = await delreq();
    t.pass();
 }); 

//test UpdateRequest function
const {updateRequest} =require('../service/RequestService.js');

test('Update Request test', async t => {
    const result = await updateRequest();
    t.pass();
 }); 