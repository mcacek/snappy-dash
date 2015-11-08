var gulp = require('gulp');
var gulpConfig = require('../conf/gulp.conf');
var watch = require('gulp-watch');
var gulpIf = require('gulp-if');

var staticConf = gulpConfig.tasks.static;

gulp.task('build:static', buildStatic);

function buildStatic(withWatch) {
  return gulp.src(staticConf.files.src)
    .pipe(gulpIf(withWatch, watch(staticConf.files.src)))
    .pipe(gulp.dest(staticConf.files.destDir));
}

exports.buildStatic = buildStatic;
