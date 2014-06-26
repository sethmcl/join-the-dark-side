module.exports = {
  selectors: {
    'heading': 'h1#firstHeading span',
    'content': '#n-contents a',
    'featuredContent': '#n-featuredcontent a',
    'currentEvents': '#n-currentevents a',
    'randomArticle': '#n-randompage a',
    'donate': '#n-sitesupport a',
    'shop': '#n-shoplink a'
  },

  assertTitle: function (title) {
    return this.client.assert.title(title);
  },

  assertHeading: function (text) {
    return this.client.assert.containsText(this.selectors.heading, text);
  },

  sidebar: function (link) {
    return this.client.click(this.selectors[link]);
  }
};
