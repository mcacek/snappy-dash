var config = {
  common: {
    buildDir: 'build'
  }
};

config.plugins = require('./gulp-plugins.conf');
config.tasks = require('./gulp-tasks.conf')(config.common);

module.exports = config;
