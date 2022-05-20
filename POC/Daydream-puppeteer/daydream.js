const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('http://www.bbc.co.uk/news');
  await page.click('.nw-o-no-keyline\@xxl > .gel-layout--equal > :nth-child(3) > .gs-c-promo--flex > .gs-u-mt\@m > div > .nw-o-link-split__anchor');
  await page.goto('http://www.bbc.co.uk/news/uk-44317432');
  await browser.close();
})()
