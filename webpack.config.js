const isDevelopment = true;

module.exports = {
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
