module.exports = {

  'Load Netflix.com': function (client) {
    client
      .url('http://www.netflix.com')
      .tagCount('a', function (result) {
        console.log('   NOTE: there are %s anchor elements on the page\n', result.value);
      })
      .assert.tagCountGreaterThan('a', 100)
      .end();
  }
};
