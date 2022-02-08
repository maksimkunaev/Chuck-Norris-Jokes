const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
//   plugins: [new HtmlWebpackPlugin()],
  plugins: [
    new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'index.html',
        template: 'src/index.html'
      })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    //   {
    //     test: /\.css$/i,
    //     use: ["style-loader", "css-loader"],
    //   },
    {
        test: /\.styl$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
                modules: true,
                sourceMap: true,
            },
          },
          {
            loader: "stylus-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ]
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};