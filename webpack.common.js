const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        './src/index.jsx'
    ],
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ],
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                        },
                    ]
                })
            },

        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
}