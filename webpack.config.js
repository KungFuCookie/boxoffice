const path = require("path");
const { readdirSync, statSync } = require("fs");

const dirs = p =>
  readdirSync(p).filter(f => statSync(path.join(p, f)).isDirectory());

const isDevelopment = true;

const entries = () => {
  const x = {};
  dirs("./src").forEach(name => {
    x[`${name}/index`] = `./src/${name}/index.js`;
  });
  return x;
};

module.exports = {
  entry: entries(),
  output: {
    libraryTarget: "commonjs2",
    path: path.resolve(__dirname, "packages"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: isDevelopment
                  ? "[path][name]__[local]--[hash:base64:5]"
                  : "[hash:base64:5]",
              },
              importLoaders: 1,
            },
          },
        ],
      },
    ],
  },
};
