var gulp = require('gulp');
var gulpConfig = require('../conf/gulp.conf');

var staticConf = gulpConfig.tasks.static;

gulp.task('build:static', buildStatic);

function buildStatic() {
  gulp.src(staticConf.files.src)
    .pipe(gulp.dest(staticConf.files.destDir));
}
