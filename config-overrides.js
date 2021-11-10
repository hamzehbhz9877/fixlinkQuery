// const CompressionPlugin = require('compression-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const PurgecssPlugin = require('purgecss-webpack-plugin');
// const glob = require('glob');
// const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = function override(webpackConfig) {

    webpackConfig.plugins.push(new CleanWebpackPlugin())

    // webpackConfig.plugins.push(new PurgecssPlugin({
    //     paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`,  { nodir: true }),
    //
    // }))

    webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        "react": "preact/compat",
        "react-dom": "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react/jsx-runtime": "preact/jsx-runtime",
    }

    webpackConfig.plugins.push(
        new CopyPlugin({
            patterns: [
                {
                    from: 'public/logo.ico',
                    to: './[name].[contenthash:8].[ext]',
                }
            ],
        })
    );

    // webpackConfig.plugins.push(
    //   new CompressionPlugin({
    //     filename: '[path][base].gz',
    //     algorithm: 'gzip',
    //     minRatio: Number.MAX_SAFE_INTEGER,
    //     exclude: /.map$/,
    //     deleteOriginalAssets: 'keep-source-map',
    //   })
    // );

    // webpackConfig.plugins.push(new BundleAnalyzerPlugin())

    return webpackConfig;
};
