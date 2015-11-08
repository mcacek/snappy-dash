var gulp = require('gulp');
var browserSync = require('browser-sync');

function serve() {
  browserSync({
    server: {
      baseDir: 'build'
    }
  });
}

gulp.task('serve', serve);
