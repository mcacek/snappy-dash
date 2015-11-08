var gulp = require('gulp');
var gulpConfig = require('../conf/gulp.conf');
var postcss = require('gulp-postcss');
var reporter = require('postcss-reporter');
var stylelint = require('stylelint');

var cssConf = gulpConfig.tasks.css;

gulp.task('build:css', buildCSS);

function buildCSS() {
  var processors = [
    stylelint(),
    reporter({ clearMessages: true })
  ];
  
  return gulp.src(cssConf.files.src)
    .pipe(postcss(processors))
    .pipe(gulp.dest(cssConf.files.destDir));
}

exports.buildCSS = buildCSS;
