World = require('../support/world');
const {Given, When } = require('cucumber');
const Selector = require('testcafe').Selector;


    Given('a customer is using a web browser which has never visited one of our sites before', async function() {
        await testController.navigateTo('https://google.com');
    });

    When('the customer visits a site for the first time', async function() {
        await testController.navigateTo('https://www.mirror.co.uk');
    });

    Given('a customer has visited one of our sites before', async function() {
        await testController.navigateTo('https://www.mirror.co.uk');
    });

    When('they visit a different site', async function() {
        await testController.navigateTo('https://www.macclesfield-live.co.uk');
    });

