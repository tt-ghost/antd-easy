var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    index: './examples/Entry/index.js',
    dev: 'webpack-dev-server/client?http://localhost:9100'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: 'dist/[name].[chunkhash:6].js'
  },
  resolve: {
    alias: {
      'antd-easy': path.join(__dirname, './lib')
    }
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'examples')],
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'examples')],
        loader: 'eslint-loader',
        query: {
          configFile: './.eslintrc'
        }
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader','css-loader'
        ]
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './examples/index.html'
    })
  ],
  devServer: {
    // contentBase: path.join(__dirname, 'examples'),
    compress: true, // 开启gzip
    host: '0.0.0.0',
    port: 9100,
    // hot: true,
    clientLogLevel: 'warning',
    watchContentBase: true,
    quiet: false,
    staticOptions: {
      redirect: false
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3100/api',
        bypass: function (req, res, proxyOptions) {
          if(req.headers.accept.indexOf('html') !== -1){
            // console.log('skiping proxy for browser request.');
            return '/';
          }
        }
      }
    }
  }
};
