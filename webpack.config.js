const path = require("path");
const webpack = require("webpack");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    devServer: {
        port: 9001,
        static: {
            directory: path.join(__dirname, 'build'),
          },
        historyApiFallback: true,
        hot: true
    },
    entry: "./src",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        chunkFilename: '[name].chunk.js',
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        }
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|png|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
              }
        ],
    },
    resolve: {
        extensions: ["*", ".js"],
    },
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
        // new BundleAnalyzerPlugin()
    ]
};