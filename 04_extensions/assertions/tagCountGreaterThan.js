/**
 * Checks that there are at least N elements of P tag on page
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.tagCountGreaterThan('a', 10);
 *    };
 * ```
 *
 * @method notContainsText
 * @param {string} tagName HTML tag name (eg, 'a')
 * @param {number} minCount Minimum number of elements
 * @param {string} [message] Optional log message to display in the output. If missing, one is displayed by default.
 * @api assertions
 */

var util = require('util');
exports.assertion = function(tagName, minCount, msg) {

  var defaultMessage  = 'Testing if there are more than %s <%s> elements on the page';
  var errorMessage  = 'Error executing command';

  // Set default message
  this.message = msg || util.format(defaultMessage, minCount, tagName);

  // The expected text
  this.expected = function () {
    return 'to find at least ' + (minCount+1) + ' ' + tagName + ' elements on page';
  };

  // returning true means assertion passed
  // returning false means assertion failed
  this.pass = function(value) {
    return (value > minCount);
  };

  // returning true means element could not be found
  this.failure = function (result) {
    var failed = (result === false || (result && result.status === -1));

    if (failed) {
      this.message = msg || errorMessage;
    }

    return failed;
  };

  // passed result of calling this.command()
  this.value = function (result) {
    return result.value;
  };

  // interacts with page
  this.command = function (callback) {
    return this.api.tagCount(tagName, callback);
  };

};
