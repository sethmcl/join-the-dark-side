var path = require('path');

module.exports = {
  tags: ['regression', 'search'],

  'Wikipedia search and navigate': function (client) {
    require('nightwatch-pages')(client, path.resolve(__dirname, '..', 'pages'));

    var searchTerm = 'selenium';

    client
      .page.homepage.load()
      .page.homepage.search(searchTerm)
      .page.wiki_entry.assertTitle('Selenium - Wikipedia, the free encyclopedia')
      .page.wiki_entry.sidebar('content')
      .page.wiki_entry.assertHeading('Portal:Contents')
      .page.wiki_entry.sidebar('featuredContent')
      .page.wiki_entry.assertHeading('Portal:Featured content')
      .page.wiki_entry.sidebar('currentEvents')
      .page.wiki_entry.assertHeading('Portal:Current events')
      .page.wiki_entry.sidebar('randomArticle')
      .end();
  }
};
