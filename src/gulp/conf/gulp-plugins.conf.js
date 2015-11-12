module.exports = {
  browserify: {
    config: {
      debug: true,
      cache: {},
      packageCache: {}
    }
  },
  postcss: {
    processors: [
      // autoprefixer({browsers: ['last 1 version']}
    ]
  }
};
