const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/mainpage/index.js',
    page1: './src/page_1top/top.js',
    page2: './src/page_2bottom/bottom.js',
    page3: './src/page_3bag/bag.js',
    page4: './src/page_4shoes/shoes.js',
    page5: './src/page_5matomabo/matomabo.js',
  },
  output: {
    filename: '[name].bundle.js', // [name]을 사용하여 각 엔트리의 이름을 파일 이름으로 사용
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/mainpage/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/page_1top/top.html',
      filename: 'top.html',
      chunks: ['page1'],
    }),
    new HtmlWebpackPlugin({
      template: './src/page_2bottom/bottom.html',
      filename: 'bottom.html',
      chunks: ['page2'],
    }),
    new HtmlWebpackPlugin({
      template: './src/page_3bag/bag.html',
      filename: 'bag.html',
      chunks: ['page3'],
    }),
    new HtmlWebpackPlugin({
      template: './src/page_4shoes/shoes.html',
      filename: 'shoes.html',
      chunks: ['page4'],
    }),
    new HtmlWebpackPlugin({
      template: './src/page_5matomabo/matomabo.html',
      filename: 'matomabo.html',
      chunks: ['page5'],
    }),
  ],
  mode: 'development', // 또는 'production'
};
