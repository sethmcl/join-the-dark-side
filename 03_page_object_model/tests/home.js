var path = require('path');

module.exports = {
  tags: ['sanity'],

  'Load Bing.com': function (client) {
    require('nightwatch-pages')(client, path.resolve(__dirname, '..', 'pages'));
    client.page.homepage.load().end();
  }
};
