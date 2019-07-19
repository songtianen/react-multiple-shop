const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
// const PurifyCSS = require("purifycss-webpack");
// const glob = require("glob-all");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');

const srcRoot = path.resolve(__dirname, '../src');
const ROOT_PATH = path.resolve(__dirname);

const webpackProdConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
    publicPath: '',
  },
  module: {
    rules: [
      {
        // loader编译之前，去验证
        enforce: 'pre',
        test: /.(js|jsx)$/,
        loader: 'eslint-loader',
        // 排除
        exclude: [
          path.join(ROOT_PATH, '../node_modules'),
          path.join(ROOT_PATH, '../src/libs'),
        ],
      },
      {
        test: /.jsx$/,
        loader: 'babel-loader',
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [path.join(ROOT_PATH, '../node_modules')],
      },
      {
        test: /.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
            },
          },
        ],
        exclude: [path.join(ROOT_PATH, '../node_modules')],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: srcRoot + '/component/rem_function.scss',
            },
          },
        ],
        exclude: [path.join(ROOT_PATH, '../node_modules')],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              outputPath: 'assets/fonts/',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 通过options 配置路径
              name: '[name].[ext]',
              limit: 8192,
              outputPath: 'assets/imgs/',
            },
          },
          {
            loader: 'img-loader', // 图片压缩
            options: {
              pngquant: {
                quality: 80,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
      chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin({
      root: path.join(ROOT_PATH, '../'),
      // exclude: ['shared.js'],
      verbose: true,
    }),
    new webpack.DefinePlugin({
      'process.env': require('./prod.env'),
    }),
    // new PurifyCSS({
    //   paths: glob.sync([
    //     // 要做CSS Tree Shaking的路径文件
    //     path.join(ROOTPATH, "../*.html"),
    //     // path.join(ROOTPATH, "../src/*.js")
    //   ])
    // }),
  ],
});

module.exports = webpackProdConfig;
