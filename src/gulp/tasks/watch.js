var gulp = require('gulp');
var watch = require('gulp-watch');
var css = require('./css');
var js = require('./js');
var static = require('./static');

function watchJS(done) {
  // Currently not watching vendor build.
  js.snappyJSWatch(done);
}

function watchStatic() {
  return static.buildStatic()
    .pipe(watch('src/static/**/*'));
}

gulp.task('watch', ['watch:js', 'watch:css', 'watch:static']);
gulp.task('watch:js', watchJS);
gulp.task('watch:css', css.buildCSS(true));
gulp.task('watch:static', watchStatic);
