const path = require('path');
const webpack = require('webpack');
const config = {
    resolve: {
        modules: [path.resolve('./lib'), path.resolve('./node_modules')]
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
};

module.exports = config;