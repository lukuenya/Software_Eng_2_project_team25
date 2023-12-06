const test = require('ava');

const {getListAnnouncements} = require('../service/AnnouncementService.js');


test('Async', async t => {
    const res = Promise.resolve('unicorn');
    t.is(await res, 'unicorn');
})

test('getListAnnouncements', t =>{
    const result = getListAnnouncements(3);
    console.log(result);

});

