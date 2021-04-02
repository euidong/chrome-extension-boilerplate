const path = require('path');
const packageInfo = require('./package.json');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const ChromeExtensionReloader = require('webpack-chrome-extension-reloader');

const fileExtensions = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'eot',
  'otf',
  'svg',
  'ttf',
  'woff',
  'woff2'
];

module.exports = {
  entry: {
    background: './src/background/index.ts',
    content: './src/content/index.ts',
    option: './src/view/option.tsx',
    popup: './src/view/popup.tsx'
  },
  resolve: {
    modules: ['node_modules']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader'
      },
      {
        test: new RegExp('.(' + fileExtensions.join('|') + ')$'),
        loader: 'file-loader',
        options: {
          name: 'image/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebPackPlugin(),
    new CopyWebPackPlugin({
      patterns: [
        {
          from: './public/manifest.json',
          transform: (content, path) =>
            Buffer.from(
              JSON.stringify({
                name: packageInfo.name,
                version: packageInfo.version,
                description: packageInfo.description,
                icons: {
                  16: 'icon/16.png',
                  32: 'icon/32.png',
                  48: 'icon/48.png',
                  128: 'icon/128.png'
                },
                background: {
                  scripts: ['background.js']
                },
                content_scripts: [
                  {
                    matches: ['<all_urls>'],
                    js: ['content.js']
                  }
                ],
                options_page: 'option.html',
                browser_action: {
                  default_popup: 'popup.html'
                },
                content_security_policy:
                  " script-src 'self' 'unsafe-eval'; object-src 'self'",
                ...JSON.parse(content.toString())
              })
            )
        },
        {
          from: './public/icon/*',
          to: './icon/[name][ext]'
        }
      ]
    }),
    new HtmlWebPackPlugin({
      template: './public/popup.html',
      chunks: ['popup'],
      filename: 'popup.html'
    }),
    new HtmlWebPackPlugin({
      template: './public/option.html',
      chunks: ['option'],
      filename: 'option.html'
    }),
    new ChromeExtensionReloader({
      reloadPage: true, // Force the reload of the page also
      entries: {
        // The entries used for the content/background scripts
        contentScript: 'content', // Use the entry names, not the file name or the path
        background: 'background' // *REQUIRED
      }
    })
  ]
};
