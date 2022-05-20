const assert = require('assert')
const puppeteer = require('puppeteer')
let browser
let page

before(async () => {
  browser = await puppeteer.launch({headless: false, executablePath: '/Applications/Google Apps.app/Contents/MacOS/Google Chrome/', timeout: 120000})
  page = await browser.newPage()
  page.setViewport({width: 1280, height: 1024})
})

describe('Check Mirror Homepage', () => {
  it('has title "Mirror Online: The intelligent tabloid. #madeuthink"', async () => {
    await page.goto('https://www.mirror.co.uk', { timeout: 120000 })
    const title = await page.title()
    assert.equal(title, 'Mirror Online: The intelligent tabloid. #madeuthink')
  }).timeout(120000)
})

after(async () => {
  await browser.close()
})
