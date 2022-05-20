var webdriverio = require('webdriverio');
var assert = require('assert');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

webdriverio
    .remote(options)
    .init()
    .url('https://www.mirror.co.uk')
    .getTitle().then(function(title) {
        assert(title === 'Mirror Online: The intelligent tabloid. #madeuthink');
    })
    .end()
    .catch(function(err) {
        console.log(err);
    });
