module.exports = {
  browserify: {
    config: {
      debug: true,
      cache: {},
      packageCache: {}
    },
    external: ['angular', 'lodash']
  },
  postcss: {
    processors: [
      // autoprefixer({browsers: ['last 1 version']}
    ]
  }
};
