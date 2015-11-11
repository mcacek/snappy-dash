var gulp = require('gulp');
var gulpConfig = require('../conf/gulp.conf');
var watch = require('gulp-watch');

var staticConf = gulpConfig.tasks.static;

gulp.task('build:static', buildStatic);
gulp.task('watch:static', watchStatic);

function buildStatic() {
  return gulp.src(staticConf.files.src)
    .pipe(gulp.dest(staticConf.files.destDir));
}

function watchStatic() {
  watch(staticConf.files.src, function() {
    buildStatic();
  });
}

exports.buildStatic = buildStatic;
exports.watchStatic = watchStatic;
