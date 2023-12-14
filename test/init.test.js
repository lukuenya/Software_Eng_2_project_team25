const test = require('ava');


test('Async', async t => {
    const res = Promise.resolve('unicorn');
    t.is(await res, 'unicorn');
})



// Write a unit test for the getListAnnouncements function.


