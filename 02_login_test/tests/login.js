module.exports = {

  'Step 1: Fill out form': function (client) {
    var data = client.globals;

    client
      .url(data.urls.login)
      .waitForElementVisible('body', 1000)
      .assert.title('Awesome App1')
      .setValue('input[name=username]', data.username)
      .setValue('input[name=password]', data.password);
  },

  'Step 2: Login': function (client) {
    var data = client.globals;

    client
      .click('input[type=submit]')
      .assert.title('Welcome!')
      .assert.containsText('p', data.username)
      .end();
  }
};

