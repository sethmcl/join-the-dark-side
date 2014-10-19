/**
 * Checks if the given element does NOT contain the specified text.
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.notContainsText('#main', 'The Day Watch');
 *    };
 * ```
 *
 * @method notContainsText
 * @param {string} selector The selector (CSS / Xpath) used to locate the element.
 * @param {string} expectedText The text to look for.
 * @param {string} [message] Optional log message to display in the output. If missing, one is displayed by default.
 * @api assertions
 */

var util = require('util');
exports.assertion = function(selector, expectedText, msg) {

  var defaultMessage  = 'Testing if element <%s> does NOT contain text: "%s".';
  var notFoundMessage = 'Element could not be located';

  // Set default message
  this.message = msg || util.format(defaultMessage, selector, expectedText);

  // The expected text
  this.expected = function () {
    return 'not to find \'' + expectedText + '\' in text';
  };

  // returning true means assertion passed
  // returning false means assertion failed
  this.pass = function(value) {
    return value.indexOf(expectedText) === -1;
  };

  // returning true means element could not be found
  this.failure = function (result) {
    var failed = (result === false || (result && result.status === -1));

    if (failed) {
      this.message = msg || util.format(notFoundMessage, selector, expectedText);
    }

    return failed;
  };

  // passed result of calling this.command()
  this.value = function (result) {
    return result.value;
  };

  // interacts with page
  this.command = function (callback) {
    return this.api.getText(selector, callback);
  };

};
