world = require('../support/world');
const { Then } = require('cucumber');
const ClientFunction = require('testcafe').ClientFunction;

    Then('a unique tracking code is created in their cookie', async function() {

        const cookie = await testController.document.cookie({name: "TM_ga_clientId"});
        expect(cookie.domain).eql('www.mirror.co.uk');
        expect(cookie.value).notEql(null);
    });

    Then('their unique tracking code is present in their cookie', async function() {
        const cookies = await this.page.cookies('https://www.mirror.co.uk');
        const cookie = cookies.filter(a=>a.name=="TM_ga_clientId");
        expect(cookie[0].domain).to.equal('www.mirror.co.uk');
        expect(cookie[0].value).to.not.equal(null);

        const cookies2 = await this.page.cookies('https://www.macclesfield-live.co.uk');
        const cookie2 = cookies2.filter(a=>a.name=="TM_ga_clientId");
        expect(cookie2[0].domain).to.equal('www.macclesfield-live.co.uk');
        expect(cookie2[0].value).to.equal(cookie[0].value);
    });


