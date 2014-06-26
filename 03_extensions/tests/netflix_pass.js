module.exports = {

  'Load Netflix.com A': function (client) {
    client
      .url('http://www.netflix.com')
      .assert.notContainsText('h1.contents', 'nowhere')
      .end();
  }
};
