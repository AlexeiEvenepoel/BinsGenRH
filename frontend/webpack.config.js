const path = require("path");

module.exports = {
  mode: "development", // Change to 'production' for production builds
  entry: "./src/main.js",
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "dist"),
    clean: false, // Don't clean dist folder to preserve other files
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  devtool: "source-map", // Enable source maps for debugging
  optimization: {
    minimize: false, // Disable minification for development
  },
};
