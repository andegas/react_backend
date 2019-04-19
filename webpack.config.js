const path = require('path');

module.exports = {
    entry: ['./react/components/index.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'vendor.js'
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    }
};
