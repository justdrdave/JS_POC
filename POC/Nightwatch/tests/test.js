module.exports = {
  'Demo test Mirror' : function (client) {
    client
      .url('http://www.mirror.co.uk')
      .waitForElementVisible('body', 60000)
      .assert.title('Mirror Online: The intelligent tabloid. #madeuthink')
      .end()
  }
}
