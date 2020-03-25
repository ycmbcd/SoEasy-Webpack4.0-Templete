module.exports = {
    entry: './src/main.js',
    module:{
        rules:[
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1024 * 10,
                        name: './static/images/[name]_[hash:6].[ext]',
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader',
                options:{
                    name: './static/fonts/[name]_[hash:6].[ext]',
                }
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
    }    
};
