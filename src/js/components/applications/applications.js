const Vue = require('vue');
const fs = require('fs');

module.exports = Vue.extend({
  template: fs.readFileSync(__dirname + '/applications.html', 'utf8')
});
