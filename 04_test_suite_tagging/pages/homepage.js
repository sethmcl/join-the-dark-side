module.exports = {
  selectors: {
    searchInput: '#searchInput'
  },

  load: function () {
    var url = this.client.globals.urls.homepage;

    return this.client.url(url);
  },

  assertTitle: function (title) {
    return this.client.assert.title(title);
  },

  search: function (query) {
    return this.client
      .assert.visible(this.selectors.searchInput)
      .setValue(this.selectors.searchInput, query)
      .keys([this.client.Keys.ENTER]);
  }
};

