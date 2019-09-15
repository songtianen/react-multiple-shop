const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const srcRoot = path.resolve(__dirname, '../src');
const distPath = path.resolve(__dirname, '../dist');
const pageDir = path.resolve(srcRoot, 'page');
// const mainFile = 'index.js';

const isProd = process.env.NODE_ENV === 'production';

// 多页面入口循环遍历 page 文件夹
const getEntry = () => {
  let entryMap = {};
  /**
   * fs.readdirSync(pageDir)
   * 同步寻找page文件夹下所有的目录
   */
  fs.readdirSync(pageDir).forEach((pathName) => {
    console.log('同步寻找page文件夹下所有的文件目录', pathName);
    let fullPathName = path.resolve(pageDir, pathName); // 得到文件的绝对路径
    console.log('得到完整的目录（绝对路径）', fullPathName);
    let stat = fs.statSync(fullPathName); // 来判断是否是文件目录
    let fileName = path.resolve(fullPathName, 'index.js');
    console.log('得到拼接完文件名的路径（拼接index.js）', fullPathName);
    if (stat.isDirectory() && fs.existsSync(fileName)) {
      /*
        fs.existsSync(fileName) 检查文件是否存在
        如果fullPathName是一个目录，与 得到拼接完文件名的路径（拼接index.js）是一个文件
      */
      entryMap[pathName] = fileName;
    }
  });
  console.log('entryMap', entryMap);
  return entryMap;
};
const entryMap = getEntry();

function getHtmlArray(entryMap) {
  let htmlArray = [];
  Object.keys(entryMap).forEach((key) => {
    let fullPathName = path.resolve(pageDir, key);
    let fileName = path.resolve(fullPathName, key + '.html');
    if (fs.existsSync(fileName)) {
      htmlArray.push(
        new HtmlWebpackPlugin({
          filename: key + '.html',
          template: fileName,
          chunks: ['vendor', key, 'runtime~' + key],
          eject: true,
        }),
      );
    }
  });
  return htmlArray;
}
const htmlArray = getHtmlArray(entryMap);

const baseWebpackConfig = {
  mode: isProd ? 'production' : 'development',
  entry: entryMap,
  output: {
    path: distPath,
  },
  devtool: 'inline-source-map',

  resolve: {
    alias: {
      component: path.resolve(srcRoot, 'component'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },

  // mode为production自动启用
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          comments: false,
          ecma: 6,
          cache: true,
          parallel: true,
          compress: {
            drop_console: true, // console
            pure_funcs: ['console.log'], // 移除console
          },
        },
      }),
      // 压缩css
      new OptimizeCSSAssetsPlugin(),
      // {
      // cssProcessorOptions: {
      //   map: { inline: false }
      // }
      // }
    ],
    runtimeChunk: true,
    namedModules: true,
    namedChunks: true,
    splitChunks: {
      cacheGroups: {
        // styles: {
        //   name: 'styles',
        //   test: /\.less$/,
        //   chunks: 'all',
        //   enforce: true
        // },
        vendor: {
          // test(module) {
          //   // 阻止.css文件资源打包到vendor chunk中
          //   if (module.resource && /\.css$/.test(module.resource)) {
          //     return false;
          //   }
          //   // node_modules目录下的模块打包到vendor chunk中
          //   return module.context && module.context.includes('node_modules');
          // },
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendor',
          priority: 10, // 优先
          enforce: true,
        },
      },
    },
  },
  plugins: [
    // 由于mac不区分大小写，linux区分大小写，可能导致mac上正常，在部署时出错，所以强制区分大小写
    new CaseSensitivePathsPlugin(),

    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: path.join(ROOT_PATH, '../src/index.html'),
    // }),
  ].concat(htmlArray),
};

module.exports = baseWebpackConfig;
