const test = require('ava');

// First test
test('Random test', t => {
    t.pass();
    });

const addnumber = (a, b) => a + b;

test('Add two numbers', t => {
    t.is(addnumber(1, 2), 3);
    t.is(addnumber(-10, 4), -6);
    t.is(addnumber(0, 0), 0);
    t.is(addnumber(0.8, 0.2), 1);
    });  

test('Async test', async t => {
    const p = Promise.resolve('Tested');// Promise by default is resolved
    t.is(await p, 'Tested');
});