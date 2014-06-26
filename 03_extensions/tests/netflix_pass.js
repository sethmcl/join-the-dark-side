module.exports = {

  'Load Netflix.com': function (client) {
    client
      .url('http://www.netflix.com')
      .assert.notContainsText('h1.contents', 'nowhere')
      .end();
  }
};
