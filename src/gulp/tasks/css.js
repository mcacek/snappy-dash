var gulp = require('gulp');
var gulpConfig = require('../conf/gulp.conf');
var postcss = require('gulp-postcss');
var atImport = require('postcss-import');
var reporter = require('postcss-reporter');
var customProperties = require('postcss-custom-properties');
var postcssNested = require('postcss-nested');
var autoprefixer = require('autoprefixer');
var stylelint = require('stylelint');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var mergeStream = require('merge-stream');
var _ = require('lodash');

var cssConf = gulpConfig.tasks.css;

gulp.task('build:css', buildCSS);
gulp.task('watch:css', watchCSS);

function buildCSS() {
    return mergeStream(snappyCSS(), vendorCSS());
}

function watchCSS(done) {
  var snappy = cssConf.snappy;
  var vendor = cssConf.vendor;

  watch(_.flatten([snappy.files.watch, vendor.files.src]), function() {
    mergeStream(snappyCSS(), vendorCSS())
      .on('end', done);
  });
}

function snappyCSS() {
  var snappy = cssConf.snappy;
  var processors = [
    atImport(),
    postcssNested(),
    customProperties(),
    stylelint(),
    autoprefixer({ browsers: ['last 2 versions'] }),
    reporter({ clearMessages: true })
  ];

  return gulp.src(snappy.files.src)
    .pipe(postcss(processors))
    .pipe(gulp.dest(snappy.files.destDir));
}

function vendorCSS() {
  var vendor = cssConf.vendor;

  return gulp.src(vendor.files.src)
    .pipe(concat(vendor.files.destFile))
    .pipe(gulp.dest(vendor.files.destDir));
}

exports.buildCSS = buildCSS;
