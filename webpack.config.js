module.exports = function (env) {
  env = env || {};
  const isProduction = env.production;
  const isDebugMode = env.debug;
  const isDevServer = env.devServer;

  /* eslint-disable */
  const DEV_SERVER_PORT = 9000;
  const webpack = require('webpack');
  const _ = require('lodash');
  const path = require('path');
  const fs = require('fs');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
  const autoprefixer = require('autoprefixer');
  const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
  const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin')
  const WebpackBuildInfo = require('webpack-build-info');

// Проверяем наличие и заполнение файла private.ts
  if (!fs.existsSync(path.join(__dirname, 'app', 'private.ts'))) {
    console.error('Отсутствует файл конфигурации private.ts! Скопируйте его из app/private.ts.example и заполните настройки');
    process.exit(1);
  }

  const webpackConfig = {
    context: path.join(__dirname, 'app'),

    entry: {
      main: './app.ts',
      vendor: './vendor.ts'
    },

    output: {
      path: path.join(__dirname, 'build'),
      filename: isProduction ? '[name].[chunkhash].js' : '[name].js',
      library: '[name]',
      publicPath: isDevServer ? `http://0.0.0.0:${DEV_SERVER_PORT}/` : '/',
    },

    resolve: {
      modules: [
        path.join(__dirname, 'node_modules'),
        __dirname, // чтобы можно было писать require от корня, например require('app/components/backend/models/RegistryWork')
      ],
      alias: {
        utils: path.resolve(__dirname, 'app/components/main/common/utils'),
        EventEmitter: 'wolfy87-eventemitter',
        ngCookies: 'angular-cookies',
        ngRoute: 'angular-route',
        restangular: 'restangular',
        ngMockE2E: 'angular-mocks',
        'chart.js': 'angular-chart.js',
        'ui-router': 'angular-ui-router',
        ngDropdowns: 'angular-dropdowns',
        ngFileUpload: 'ng-file-upload',
        nsPopover: 'nsPopover',
        'naif.base64': 'angular-base64-upload',
      },
      extensions: ['.ts', '.js', '.css'],
    },

    plugins: [
      // new CleanWebpackPlugin(['build']),
      new webpack.ProvidePlugin({
        moment: 'moment',
      }),
      new webpack.optimize.CommonsChunkPlugin({ // все сторонние либы, чтобы при изменеии бизнес-кода кэш по ним сохранялся
        name: "vendor",
        minChunks: function(module){
          return module.context && module.context.indexOf("node_modules") !== -1;
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({ // служебный код import'а webpack'а
        name: "manifest",
        minChunks: Infinity
      }),
      new HtmlWebpackPlugin({
        filename: path.join(__dirname, 'build', 'index.html'),
        template: path.join(__dirname, 'app', 'index.template.html'),
        inject: 'head',
        favicon: path.join(__dirname, 'app', 'static', 'images', 'favicon.ico'),
      }),
      // чтобы все скрипты, которые будут добавлены в HEAD, не блокировали отрисовку DOM в index.html
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
      }),
      new ExtractTextWebpackPlugin({
        filename: 'style.[hash].css',
        disable: !isProduction,
        allChunks: true
      }),
      new WebpackBuildInfo({
        packageJsonPath: './package.json', // для извлечения версии
        buildVersionPath: './build/buildRevision.txt',
        entryName: 'manifest', // в какой файл будет добавлена информация о билде
        disabled: false,
        needBuildRevision: true,
      })
    ],

    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: "awesome-typescript-loader",
          options: {
            tsconfig: './tsconfig.json'
          }
        },
        {
          test:   /\.js$/,
          use: 'source-map-loader',
          enforce: "pre"
        },
        {
          test: /\.html$/,
          use: 'html-loader',
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader', options: { sourceMap: isDebugMode } },
            { loader: 'postcss-loader' },
          ]
        },
        {
          test: /\.scss$/,
          use: ExtractTextWebpackPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', options: { sourceMap: isDebugMode } },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: 'inline',
                  plugins: [autoprefixer],
                }
              },
              { loader: 'sass-loader', options: { sourceMap: isDebugMode } },
            ],
          }),
        },
        {
          test: /\.png$/,
          use: { loader: 'file-loader', options: { name: '[path][name]_[hash].[ext]' } },
        },
        {
          test: /\.(eot|svg|ttf|woff)$/,
          use: isProduction ? { loader: 'file-loader', options: { name: 'fonts/[name]_[hash].[ext]' } } : 'url-loader',
        }
      ],
    },

    devServer: {
      port: DEV_SERVER_PORT,
      compress: true,
      disableHostCheck: true,
      historyApiFallback: true,
      quiet: false,
      noInfo: false,
      stats: 'minimal',
    },

    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    devtool: 'source-map',
  };

  if (!isProduction) {
    webpackConfig.module.rules.push({
      test: /\.ts$/,
      enforce: 'pre',
      loader: 'tslint-loader',
    });
  }

  // if (isProduction) {
  //   webpackConfig.plugins.push(new UglifyJsPlugin({
  //     mangle: {
  //       except: ['$super', '$', 'exports', 'require']
  //     },
  //     sourceMap: isDebugMode,
  //   }));
  // }

  // if (isProduction && isDebugMode) {
  //   webpackConfig.devtool = 'source-map'
  // } else {
  //   webpackConfig.devtool = isProduction ? '' : 'cheap-module-source-map';
  // }

  return webpackConfig;
}
