var gulp = require('gulp');
var gulpConfig = require('../conf/gulp.conf');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');
var mergeStream = require('merge-stream');
var watchify = require('watchify');
var _ = require('lodash');

var pluginsConf = gulpConfig.plugins;
var jsConf = gulpConfig.tasks.js;

gulp.task('build:js', buildJS);

function buildJS() {
  return mergeStream(snappyJS(), vendorJS());
}

// TODO: Clean up all this crap...too many functions.
function snappyJS() {
  var browserifyConfig = _.cloneDeep(pluginsConf.browserify.config);

  var snappy = jsConf.snappy;
  browserifyConfig.src = snappy.files.src;

  return browserify(browserifyConfig)
    .external(pluginsConf.browserify.external)
    .bundle()
    .pipe(source(snappy.files.destFile))
    .pipe(buffer())
    .pipe(gulp.dest(snappy.files.destDir));
}

function snappyJSWatch(done) {
  var browserifyConfig = _.cloneDeep(pluginsConf.browserify.config);

  var snappy = jsConf.snappy;
  browserifyConfig.entries = snappy.files.src;
  browserifyConfig.plugin = [watchify];

  var bundler = browserify(browserifyConfig);

  bundler.on('update', bundle);
  bundler.on('end', done);

  function bundle() {
    bundler.external(pluginsConf.browserify.external)
      .bundle()
      .pipe(source(snappy.files.destFile))
      .pipe(buffer())
      .pipe(gulp.dest(snappy.files.destDir));
  }

  bundle();
}

function vendorJS() {
  var vendor = jsConf.vendor;

  return gulp.src(vendor.files.src)
    .pipe(concat(vendor.files.destFile))
    .pipe(gulp.dest(vendor.files.destDir));
}

exports.buildJS = buildJS;
exports.snappyJS = snappyJS;
exports.snappyJSWatch = snappyJSWatch;
exports.vendorJS = vendorJS;
