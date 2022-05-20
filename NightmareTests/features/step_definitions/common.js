World = require('../../support/world');

const {Given, When, Before, After, setDefaultTimeout } = require('cucumber');
const Nightmare = require('nightmare');

const DEFAULT_TIMEOUT_MS = (60 * 1000);

var disableHeadless = process.env.disableHeadless || false;

    setDefaultTimeout(DEFAULT_TIMEOUT_MS);

    Before(function () {
        return this.nightmare = Nightmare({ show: disableHeadless });
    });

    After(function () {
        return this.nightmare.end();
    });

    Given('a customer is using a web browser which has never visited one of our sites before', function () {
        return this.nightmare
            .goto("http:www.google.com")
            .cookies.clearAll();
    });

    When('the customer visits a site for the first time', function () {
        return this.nightmare
            .goto('https://www.mirror.co.uk');
    });

    Given('a customer has visited one of our sites before', function () {
        return this.nightmare
            .goto('https://www.mirror.co.uk')
    });

    When('they visit a different site', function () {
        return this.nightmare
            .goto('https://www.macclesfield-live.co.uk')
    });

