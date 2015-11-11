var gulp = require('gulp');
var css = require('./css');
var js = require('./js');
var static = require('./static');

gulp.task('watch', ['watch:js', 'watch:css', 'watch:static']);
// Currently not watching vendor build.
gulp.task('watch:js', js.snappyJSWatch);
gulp.task('watch:css', css.buildCSS(true));
gulp.task('watch:static', static.watchStatic);
