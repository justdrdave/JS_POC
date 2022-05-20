World = require('../../support/world');

const { Then } = require('cucumber');

const chai = require('chai')
const expect = chai.expect


Then('the cookie notice is displayed', function () {
    return this.nightmare
        //.exists('gdpr-button primary')
        //.visible('gdpr-button primary')
        //.exists('gdpr-button secondary')
        //.visible('gdpr-button secondary')
        //.evaluate(() => document.querySelector('.captify-widget > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)'))
        //.evaluate(() => document.querySelector('.captify-widget').innerHTML)
        .evaluate(() => document.querySelector('.captify-widget').innerHTML)
        .then(text => {
            console.log(text);
            //expect(title).to.equal('Mirror Online: The intelligent tabloid. #madeuthink');
        })
});
