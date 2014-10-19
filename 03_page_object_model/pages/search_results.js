module.exports = {
  selectors: {
    'resultDiv': '#b_results',
    'navImages': 'nav ul li:nth-child(2) a'
  },

  assertResults: function (text) {
    return this.client.assert.containsText(this.selectors.resultDiv, text);
  },

  navImages: function () {
    return this.client.click(this.selectors.navImages);
  }
};
