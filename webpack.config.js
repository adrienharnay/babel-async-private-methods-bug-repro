const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const NODE_ENV =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';
const IS_PRODUCTION = NODE_ENV === 'production';
const PUBLIC_PATH = '/';

const include = [path.resolve(__dirname)];
const exclude = [/node_modules/, path.resolve(__dirname, 'public/dist')];

const roots = ['node_modules', path.join(__dirname, 'node_modules'), __dirname];

module.exports = {
  mode: IS_PRODUCTION ? 'production' : 'development',
  bail: IS_PRODUCTION,
  name: 'client',
  target: 'web',
  entry: ['./src/entry/js/polyfills', './src/entry/js/client'],
  context: __dirname,
  output: {
    filename: 'main.mjs',
    path: path.join(__dirname, 'public/dist'),
    publicPath: PUBLIC_PATH,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.join(__dirname, './.babelrc.js'),
              envName: 'production',
              cacheDirectory: !IS_PRODUCTION,
              babelrc: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: !IS_PRODUCTION,
      minimize: IS_PRODUCTION,
    }),
    new webpack.DefinePlugin({
      __NODE_ENV__: JSON.stringify(NODE_ENV),
    }),
  ],
  resolve: {
    modules: roots,
    extensions: ['.js', '.json'],
  },
  resolveLoader: {
    modules: roots,
    extensions: ['.js', '.json'],
  },
  optimization: {
    noEmitOnErrors: true,
    minimizer: IS_PRODUCTION
      ? [
          new TerserPlugin({
            test: /\.m?js(\?.*)?$/i,
            cache: true,
            parallel: true,
          }),
        ]
      : undefined,
  },
};
