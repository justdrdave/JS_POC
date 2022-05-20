World = require('../../support/world');

const { Then } = require('cucumber');

const chai = require('chai')
const expect = chai.expect

Then('the cookie notice is displayed', async function testCase() {

    var frames = await this.page.mainFrame().childFrames();

    var i;
    var frame;
    var f;
    var f2;
    for (i = 0; i < frames.length; i++){
        f = await this.page.mainFrame().childFrames()[i];
        f2 = await f.content();
        if (String(f2).includes('captify')){
            frame = f;
        }
    }

   expect((String(await frame.content())).includes('We use cookies to help our site work, to understand how it is used, and to tailor the adverts presented on our site. By clicking “Accept” below, you agree to us doing so. You can read more in our cookie notice. Or, if you do not agree, you can click Manage below to access other choices.'));

   // var frame = await this.page.mainFrame().childFrames().filter(f => console.log(f.classname()));
    //frames.forEach(f => console.log(f.name()))
        //.exists('gdpr-button primary')
        //.visible('gdpr-button primary')
        //.exists('gdpr-button secondary')
        //.visible('gdpr-button secondary')
        //.evaluate(() => document.querySelector('.captify-widget > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)'))
        //.evaluate(() => document.querySelector('.captify-widget').innerHTML)
        //var text = await frame.$eval('.captify-widget > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)');
        //console.log(frame);

            //expect(title).to.equal('Mirror Online: The intelligent tabloid. #madeuthink');
    //var text = (await this.page.content()).match('.captify-widget');
    //var text = await this.page.focus('.captify-widget');
    //const text = await this.page.$eval('.captify-widget', e => e.innerHTML);

    //console.log(text);

    //const text2 = await frame.content();


    //console.log(text2);


});


