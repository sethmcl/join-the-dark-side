var path               = require('path');
var express            = require('express');
var Promise            = require('bluebird');
var bodyParser         = require('body-parser');

module.exports = Server;

/**
 * @constructor
 * @param {number} port
 */
function Server(port) {
  var staticPath = path.resolve(__dirname, '..', 'static');
  var viewPath   = path.resolve(__dirname, '..', 'static', 'tl');
  var app        = this.app = express();

  this.port = port || 8000;

  app.set('view engine', 'mustache');
  app.set('views', viewPath);
  app.enable('view cache');
  app.engine('mustache', require('hogan-express'));

  app.use(express.static(staticPath));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/', function (req, res) {
    res.render('index');
  });

  app.post('/submit_login', function (req, res) {
    if (req.body.password === 'html5dev') {
      res.render('welcome', { username: req.body.username });
    } else {
      res.render('access_denied');
    }
  });
}

/**
 * Run server
 */
Server.prototype.run = function () {
  return new Promise(function (resolve, reject) {
    this.app.listen(this.port, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(this.port);
      }
    }.bind(this));
  }.bind(this));
};
