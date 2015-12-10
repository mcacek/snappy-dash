var Vue = require('vue');
var fs = require('fs');
const path = require('path');

module.exports = Vue.extend({
  template: fs.readFileSync(path.join(__dirname, '/support.html'), 'utf8')
});
