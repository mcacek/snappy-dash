var gulp = require('gulp');
var gulpConfig = require('../conf/gulp.conf');
var postcss = require('gulp-postcss');
var reporter = require('postcss-reporter');
var stylelint = require('stylelint');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var mergeStream = require('merge-stream');

var cssConf = gulpConfig.tasks.css;

gulp.task('build:css', buildCSS(false));

function buildCSS(withWatch) {
  return function() {
    return mergeStream(snappyCSS(withWatch), vendorCSS(withWatch));
  };
}

function snappyCSS(withWatch) {
  var snappy = cssConf.snappy;
  var processors = [
    stylelint(),
    reporter({ clearMessages: true })
  ];

  var stream = gulp.src(snappy.files.src);

  if (withWatch) {
    stream.pipe(watch(snappy.files.src));
  }

  return stream
    .pipe(postcss(processors))
    .pipe(gulp.dest(snappy.files.destDir));
}

function vendorCSS(withWatch) {
  var vendor = cssConf.vendor;

  var stream = gulp.src(vendor.files.src);

  if (withWatch) {
    stream.pipe(watch(vendor.files.src));
  }

  return stream
    .pipe(concat(vendor.files.destFile))
    .pipe(gulp.dest(vendor.files.destDir));
}

exports.buildCSS = buildCSS;
exports.snappyCSS = snappyCSS;
exports.vendorCSS = vendorCSS;
