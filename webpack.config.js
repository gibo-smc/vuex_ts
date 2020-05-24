const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.ts',
  },
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, 'docs/js')
  },
  plugins: [
    new VueLoaderPlugin(),
    new ForkTsCheckerWebpackPlugin(
      {
        vue: true,
        tslint: true,
        formatter: 'codeframe',
        checkSyntacticErrors: false
      }
    )
  ],
  module: {
    rules:[
      {
        test: /\.(ts|js)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [
                /\.vue$/
              ],
              happyPackMode: false
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    publicPath: '/js/',
    open: false,
    watchContentBase: true,
    host: '0.0.0.0',
    port: '3000'
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', 'json'],
    modules: ['node_modules'],
    alias: {
      // vue.js のビルドを指定する
      vue: 'vue/dist/vue.common.js',
      '@': path.resolve(__dirname, 'src/')
    }
  }
}