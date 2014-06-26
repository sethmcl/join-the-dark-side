// command to return the number of elements in a page
// which are of a certain tag name
exports.command = function (tagName, callback) {
  callback = callback || function () {};

  this.execute(function (tagName) {
    return document.getElementsByTagName(tagName).length;
  }, [tagName], function (result) {
    callback.call(this, result);
  });

  return this; // allows the command to be chained.
};

