module.exports = function(common) {
  return {
    js: {
      snappy: {
        files: {
          src: ['src/js/snappy-dash.js'],
          destDir: common.buildDir + '/assets/js',
          destFile: 'snappy-dash.js'
        }
      },
      vendor: {
        files: {
          src: [
            'node_modules/lodash/index.js',
            'node_modules/vue/dist/vue.js',
            'node_modules/vue-router/dist/vue-router.js'
          ],
          destDir: common.buildDir + '/assets/js',
          destFile: 'vendor.js'
        }
      }
    },
    css: {
      snappy: {
        files: {
          watch: ['src/css/**/*.css'],
          src: ['src/css/snappy-dash.css'],
          destDir: common.buildDir + '/assets/css'
        }
      },
      vendor: {
        files: {
          src: [
            'node_modules/purecss/build/pure.css'
          ],
          destDir: common.buildDir + '/assets/css',
          destFile: 'vendor.css'
        }
      }
    },
    static: {
      files: {
        src: ['src/static/**/*.*'],
        destDir: common.buildDir
      }
    }
  };
};
