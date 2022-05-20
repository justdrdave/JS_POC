World = require('../../support/world');
const puppeteer = require('puppeteer');
const {Given, When, Before, After, setDefaultTimeout } = require('cucumber');

const DEFAULT_TIMEOUT_MS = (240 * 1000);

const headless = process.env.headless || 'true';

    setDefaultTimeout(DEFAULT_TIMEOUT_MS);

    Before(async function testCase() {
        if (headless === 'false') this.browser = await puppeteer.launch({headless: false, timeout: 120000});
        else this.browser = await puppeteer.launch({headless: true, timeout: 120000});

        this.page = await this.browser.newPage();
        await this.page.setDefaultNavigationTimeout(240 * 1000);
        await this.page.setViewport({width: 1280, height: 1024});
    });

    After(async function testCase() {
        await this.browser.close();
    });

    Given('a customer is using a web browser which has never visited one of our sites before', async function testCase() {
        await this.page.goto("http:www.google.com", { waitUntil: 'networkidle2' });
        await this.page.deleteCookie();
    });

    When('the customer visits a site for the first time', async function testCase() {
        await this.page.goto('https://www.mirror.co.uk', { waitUntil: 'networkidle2' });
    });

    Given('a customer has visited one of our sites before', async function testCase() {
        await this.page.goto('https://www.mirror.co.uk', { waitUntil: 'networkidle2' })
    });

    When('they visit a different site', async function testCase() {
        await this.page.goto('https://www.macclesfield-live.co.uk', { waitUntil: 'networkidle2' })
    });

