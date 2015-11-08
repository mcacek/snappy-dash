var gulp = require('gulp');
var watch = require('gulp-watch');
var css = require('./css');
var js = require('./js');

function watchJS(done) {
  // Currently not watching vendor build.
  js.snappyJSWatch(done);
}

function watchCSS(done) {
  watch('src/css/**/*.css', function() {
    css.buildCSS()
      .pipe(watch('src/css/**/*.css'))
      .on('end', done);
  });
}

gulp.task('watch:js', watchJS);
gulp.task('watch:css', watchCSS);
