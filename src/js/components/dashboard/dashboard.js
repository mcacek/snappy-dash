var Vue = require('vue');
var fs = require('fs');

module.exports = Vue.extend({
  template: fs.readFileSync(__dirname + '/dashboard.html', 'utf8')
});
