module.exports = {
    mode: 'development',
    entry : './src/app.js',
    output : {
        path: `${__dirname}/public/`,
        filename: 'bundle.js'
    },
    module : {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
            options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }],
                  ["@babel/preset-react"]
                ]
            }
        }]
    },
    devServer: {
        contentBase: `${__dirname}/public/`,
        historyApiFallback: true
    },
    devtool: 'source-map'
};