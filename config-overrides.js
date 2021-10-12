const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
const path = require('path')

module.exports = function override(webpackConfig) {
    webpackConfig.plugins.push(new PurgecssPlugin({
        paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`,  { nodir: true }),
    }))
    webpackConfig.plugins.push(
        new CompressionPlugin({
            filename:"[path][base].gz",
            algorithm: "gzip",
            minRatio:Number.MAX_SAFE_INTEGER,
            exclude: /.map$/,
            deleteOriginalAssets: 'keep-source-map',
        }))
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
    return webpackConfig
}

