World = require('../../support/world');

const { Then } = require('cucumber');

const chai = require('chai')
const expect = chai.expect

var customerId = "";

    Then('a unique tracking code is created in their cookie', function () {
        return this.nightmare
            .cookies.get('TM_ga_clientId')
            .then((cookies) => {
                expect(cookies.domain).to.equal('www.mirror.co.uk');
                expect(cookies.value).to.not.equal(null)
            });
    });


    Then('their unique tracking code is present in their cookie', function () {
        return this.nightmare
            .cookies.get({url: 'https://www.mirror.co.uk', name: 'TM_ga_clientId'})
            .then((cookies) => {
                expect(cookies.domain).to.equal('www.mirror.co.uk');
                expect(cookies.value).to.not.equal(null);
                customerId = cookies.value
            })
            .then(() => {
                this.nightmare.cookies.get({url: 'https://www.macclesfield-live.co.uk', name: 'TM_ga_clientId'})
                    .then((cookies) => {
                        expect(cookies.domain).to.equal('www.macclesfield-live.co.uk');
                        expect(cookies.value).equal(customerId)
                    });
            });
    });
