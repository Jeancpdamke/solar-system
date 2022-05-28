const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

var webpack = require('webpack')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.CVA_PORT = process.env.CVA_PORT || 9000

const config = function (mode) {
    let conf = {
        mode: mode,
        entry: ['./src/index.js'],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                    type: 'asset/resource',
                }
            ]
        },
        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: 'bundle.js',
            publicPath: '/',
            assetModuleFilename: 'assets/[name][ext][query]'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new CopyPlugin({
                patterns: [
                    { from: "assets", to: "assets" },
                ],
            }),
        ],
        devServer: {
            static: {
                watch: true,
                staticOptions: {
                    ignored: /node_modules/
                },
                publicPath: 'public',
            },
            compress: true,
            hot: "only",
            port: process.env.CVA_PORT
        }
    }

    if (mode === 'development') {
        conf.plugins.push(new webpack.HotModuleReplacementPlugin())
        conf.plugins.push(new webpack.NoEmitOnErrorsPlugin())
    }

    return conf
}

module.exports = config(process.env.NODE_ENV)