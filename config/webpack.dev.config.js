const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
// eslint-disable-next-line no-unused-vars
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const CircularDependencyPlugin = require('circular-dependency-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseWebpackConfig = require('./webpack.base.config');

const srcRoot = path.resolve(__dirname, '../src');
const ROOT_PATH = path.resolve(__dirname);

const webpackDevConfig = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    publicPath: '/public/',
  },
  devServer: {
    host: '0.0.0.0',
    port: 5555,
    // 静态文件路径
    contentBase: path.join(ROOT_PATH, '../src'),
    // contentBase: path.join(ROOT_PATH, '../dist'), // html引入css不生效的问题
    inline: true,
    overlay: {
      errors: true,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:2223',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
    publicPath: '/public/', // !
    historyApiFallback: {
      index: '/public/index.html',
    },
  },
  module: {
    rules: [
      {
        // loader编译之前，去验证
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        // 排除
        exclude: [
          path.join(ROOT_PATH, '../node_modules'),
          path.join(ROOT_PATH, '../src/libs'),
        ],
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: [path.join(ROOT_PATH, '../node_modules')],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [path.join(ROOT_PATH, '../node_modules')],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
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
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
            },
          },
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
        exclude: [path.join(ROOT_PATH, '../node_modules')],
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
        exclude: [path.join(ROOT_PATH, '../node_modules')],
      },
    ],
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: '[name].css'
    // }),
    new webpack.DefinePlugin({
      'process.env': require('./dev.env'),
    }),
    // 循环依赖预警
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin() // 包分析器
    //    new CompressionPlugin({ //gzip
    //   test: /\.js$|\.css$/,
    //   cache: true,
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   threshold: 0,
    //   minRatio: 0.8,
    //   deleteOriginalAssets: true
    // }),
    // --
  ],
});

module.exports = webpackDevConfig;
