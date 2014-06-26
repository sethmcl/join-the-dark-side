module.exports = {

  'Load Netflix.com B': function (client) {
    client
      .url('http://www.netflix.com')
      .assert.notContainsText('h1.contents', 'anywhere')
      .end();
  }
};
