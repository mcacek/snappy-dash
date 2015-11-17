var Vue = require('vue');
var fs = require('fs');

module.exports = Vue.extend({
  template: fs.readFileSync(__dirname + '/releases.html', 'utf8')
});
