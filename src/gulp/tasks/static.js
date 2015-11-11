var gulp = require('gulp');
var gulpConfig = require('../conf/gulp.conf');
var watch = require('gulp-watch');
var debug = require('gulp-debug');

var staticConf = gulpConfig.tasks.static;

gulp.task('build:static', buildStatic(false));

function buildStatic(withWatch) {
  return function() {
    var stream = gulp.src(staticConf.files.src);

    if (withWatch) {
      console.log('watching..');
      stream
        .pipe(watch(staticConf.files.src));
    }

    return stream
      .pipe(debug())
      .pipe(gulp.dest(staticConf.files.destDir));
  };
}

exports.buildStatic = buildStatic(false);
exports.watchStatic = buildStatic(true);
