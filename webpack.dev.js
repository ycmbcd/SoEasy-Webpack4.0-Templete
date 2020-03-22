const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');   // 打包 html

module.exports = merge(common, {
    mode: "development",
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        open: true,
        hot: true,
        inline: true,
        quiet: false
    },
    module: {
        rules: [
            {
                test: /\.(sc|c|sa)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')({
                                    overrideBrowserslist:['last 2 version', '>1%', 'ios 7']
                                })
                            ]
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR模式，在console中显示正确的名字
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            favicon: 'favicon.ico',
        })
    ]
})
