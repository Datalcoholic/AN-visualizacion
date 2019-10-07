module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        TweenLite: "./node_modules/gsap/src/uncompressed/TweenLite.js",
        TweenMax: "./node_modules/gsap/src/uncompressed/TweenMax.js",
        TimelineLite: "./node_modules/gsap/src/uncompressed/TimelineLite.js",
        TimelineMax: "./node_modules/gsap/src/uncompressed/TimelineMax.js",
        ScrollMagic:
          "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js",
        "animation.gsap":
          "./node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js",
          addIndicators: "./node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js"
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "imports-loader?define=>false"
        },
        {
          test: /\.js$/,
          loader: "imports-loader?define=>false"
        },
        {
          test: /\.js$/,
          loader: "imports-loader?define=>false"
        },
        {
          test: /\.js$/,
          loader: "imports-loader?define=>false"
        },
        {
          test: /\.js$/,
          loader: "imports-loader?define=>false"
        },
        {
          test: /\.js$/,
          loader: "imports-loader?define=>false"
        }
      ]
    }
  }
};
