const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清空 dist
const MiniCssExtractPlugin = require('mini-css-extract-plugin');    // 提取 css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');  // 压缩 css
const HtmlWebpackPlugin = require('html-webpack-plugin');   // 打包 html

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: './static/js/main_[chunkhash:6].js',
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(sc|c|sa)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
                    }
                ],
                include: /src/,
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,   // 启用缓存，提高打包速度
                    }
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './static/css/[name]_[contenthash:6].css',
            chunkFilename: './static/css/[id]_[contenthash:6].css',
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        // HTML 压缩
        new HtmlWebpackPlugin({
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            },
            favicon: 'favicon.ico',
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
    ]
})