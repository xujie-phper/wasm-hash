const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: './hash.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }],
                exclude: /node_modules/
            }
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'wasm-hash',
        libraryTarget: 'umd',
        // iife: false,
        // scriptType: 'module',
        // module: true
    },
    experiments: {
        // outputModule: true,
        // syncWebAssembly: true,
        // asyncWebAssembly: true,
        topLevelAwait: true,
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions:{
                    module: true,
                },
            }),
        ]
    }
};
