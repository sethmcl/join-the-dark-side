module.exports = {

  'Load Bing.com': function (client) {
    client
      .url('http://www.bing.com')
      .waitForElementVisible('body', 1000)
      .assert.attributeEquals('body', 'data-foo', 'bar')
      .assert.title('Microsoft Bing')
      // .verify.attributeEquals('body', 'data-foo', 'bar')
      // .verify.title('Microsoft Bing')
      .end();
  }
};
