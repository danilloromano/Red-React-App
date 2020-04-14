  
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.html$/,
        use: { loader: "html-loader" }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.scss$/,
        use: ["style-loader","css-loader","sass-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ['file-loader',{loader: 'image-webpack-loader'}]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};