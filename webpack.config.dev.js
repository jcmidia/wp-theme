const path = require('path');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {

    // devtool: 'eval',

    // output: {
    //     filename: '[name].js',
    //     path: path.resolve(__dirname, 'dist')
    // },

    devServer: {
    	// contentBase: path.join(__dirname, 'dist'),
	    inline: false,
	    allowedHosts: ['obnc.local'],
	    headers: {
	      'Access-Control-Allow-Origin': '*',
	      'Access-Control-Allow-Headers': '*',
	    }
    }

});
