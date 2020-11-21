const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './main.js'),
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    devServer: {
        inline: true,
        port: 8001,
       contentBase: path.resolve(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html'
        })
    ]
}