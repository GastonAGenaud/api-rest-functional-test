const {Given, When, Then, AfterAll, After} = require('cucumber');
const assert = require('assert').strict
const restHelper = require('./../util/restHelper');
var data;

Given('A page {}', function (page) {
    data=page;
});

Given('A body {}', function (request) {
    this.context['request'] = JSON.parse(request);
});

When('I send POST request to {}', async function (path) {
    this.context['response'] = await restHelper.postData(`${process.env.SERVICE_URL}${path}`, this.context['request']);
})

When('I send GET request to {}', async function (path) {
    this.context['response'] = await restHelper.getData(`${process.env.SERVICE_URL}${path+data}`);
})

Then('I get response code {int}', async function (code) {
    assert.equal(this.context['response'].status, code);
});
