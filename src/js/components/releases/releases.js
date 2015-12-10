const Vue = require('vue');
const fs = require('fs');
const path = require('path');

module.exports = Vue.extend({
  template: fs.readFileSync(path.join(__dirname, '/releases.html'), 'utf8')
});
