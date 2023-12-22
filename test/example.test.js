const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');


const app = require('../index.js');

test('Async', async t => {
    const res = Promise.resolve('test');
    t.is(await res, 'test');
});



