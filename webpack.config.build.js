const path = require('path');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

const dirApp = path.join(__dirname, 'app');
const dirAssets = path.join(__dirname, 'assets');

module.exports = merge(webpackConfig, {

    devtool: 'source-map',

    output: {
        publicPath: '/spruceblog/',
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    optimization: {
    	minimize: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/, // you may add "vendor.js" here if you want to
                    name: "vendor",
                    chunks: "initial",
                    enforce: true
                }
            }
        }
    },
});
