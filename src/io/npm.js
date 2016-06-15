var execAsTask = require('../utils/exec-as-task');
var shell = require('shelljs');

module.exports = {
  publish: function version (path) {
    return execAsTask('npm publish ' + path);
  },
  version: function version (v) {
    return execAsTask('npm version ' + v + ' --git-tag-version false');
  },
  getVersion: function getVersion (packageName) {
    return function (done) {
      execAsTask(['npm view', packageName, 'version'].join(' '))(function (err, stdout) {
        done(err, stdout.trim());
      });
    }
  }
};