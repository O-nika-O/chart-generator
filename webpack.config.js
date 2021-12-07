import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
    mode: 'development',
    entry: {
        myapp: './src/index.js'
    },
    module: {
        rules: [
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
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'public'),
        publicPath: '/'
    }
}

