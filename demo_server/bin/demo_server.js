#!/usr/bin/env node
if (!process.env.DEBUG) {
  process.env.DEBUG = 'error*, info*';
}

var info   = require('debug')('info');
var Server = require('../');
var server = new Server(process.argv[2]);

server
  .run()
  .then(function (port) {
    info('Server is running on port %s', port);
  }, function (err) {
    console.error(err);
  });


