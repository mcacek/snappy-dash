var gulp = require('gulp');
var del = require('del');
var gulpConfig = require('../conf/gulp.conf');

gulp.task('clean', clean);

function clean() {
  return del(gulpConfig.common.buildDir);
}
