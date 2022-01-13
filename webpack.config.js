import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import nodeExternals from 'webpack-node-externals';


const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
    mode: 'development',
    //danger zone
    externals: [
        // nodeExternals({
        //     importType: 'umd'
        // })
        // { 'express': { commonjs: 'express' } }
    ],
    // resolve:{
    //     fallback: { "path": import.meta.resolve("path-browserify") }
    // },
    // target: 'node',
    stats: {
        errorDetails : false
    },
    //end danger zone
    entry: {
        myapp: './src/index.js'
    },
    module: {
        rules: [
            //these night be deprecated in future versions, use Asset Modules instead https://webpack.js.org/guides/asset-modules/
            {
                test: /\.(js|jsx)$/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        compact: false
                    }
                }
            },
            {
                test: /\.(css)$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Chart Generator',
            template: './src/template.ejs',
            filename: 'index.html'
        }),
        //danger zone
        // new NodePolyfillPlugin()
    ],
    resolve: {
        // modules: [
        //    "node_modules"
        // ],
        // extensions: [".ts", ".js"],
        fallback: { 
        //     "path": false,
        //     "zlib": false,
        //     "stream": false,
        //     "http": false,
        //     "crypto": false,
            // fs: false,
            // net: false
        }
     },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'public'),
        publicPath: '/'
    }
}

