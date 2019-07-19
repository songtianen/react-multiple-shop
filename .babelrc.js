module.exports = function(api) {
  const isProd = api.env();
  console.log('这是babel的api.env', isProd);
  const presets = [
    [
      '@babel/preset-env',
      {
        // 'modules': false,
        targets: {
          browsers: ['last 2 versions', 'safari >= 7'],
        },
      },
    ],
    '@babel/preset-react',
  ];
  const plugins = [
    'syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    'react-hot-loader/babel',
    '@babel/plugin-proposal-class-properties',
  ];
  return {
    presets,
    plugins,
  };
};
