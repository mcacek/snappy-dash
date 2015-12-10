const fs = require('fs');
const path = require('path');

module.exports = {
  bind: function () {
    console.log('binding');
    // do preparation work
    // e.g. add event listeners or expensive stuff
    // that needs to be run only once
  },
  update: function () {
    console.log('upate');
    this.el.innerHTML = fs.readFileSync(path.join(__dirname, '/filter-panel.html'), 'utf8');
  },
  unbind: function () {
    console.log('unbind');
    // do clean up work
    // e.g. remove event listeners added in bind()
  }
};
