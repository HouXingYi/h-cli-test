const request = require('@h-cli-test/request');

module.exports = function() {
  return request({
    url: '/project/template',
  });
};
