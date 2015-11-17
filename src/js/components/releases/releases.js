const Vue = require('vue');
const fs = require('fs');

module.exports = Vue.extend({
  template: fs.readFileSync(__dirname + '/releases.html', 'utf8')
});
