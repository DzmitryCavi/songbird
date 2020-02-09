const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssUrlRelativePlugin = require('css-url-relative-plugin');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/',
  static: 'static/'
};

const PAGES_DIR = PATHS.src;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter(fileName => fileName.endsWith('.html'));

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src
    // module: `${PATHS.src}/your-module.js`,
  },
  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist,
    publicPath: ''
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options:{
          presets:["@babel/preset-env", "@babel/preset-react"]    
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(png|jpg|gif|svg|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          
          {
            loader: 'css-loader',
            options: { sourceMap: true,
            url : false,
            import: true }
          }, 
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: `./postcss.config.js` }
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },  {
            loader: 'resolve-url-loader',
            options: { sourceMap: true,
               }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: `./postcss.config.js` }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[hash].css`
    }), 
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/styles/icons`, to: `${PATHS.assets}icons` }
    ]), 
    new CssUrlRelativePlugin(),

    ...PAGES.map(
      page =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page}`
        })
    )
  ]
};
