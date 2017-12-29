const path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: "./app/main.js",  
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "all.js",
	publicPath:"public"
    },
    module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/ ,
				use: {
					loader: 'babel-loader',
					options: {
				  		presets: ['env','react']
					}
				}
      },
      
      {
        test: /\.less$/,
        use:  ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader!less-loader"

          })
      }
		]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
      new OpenBrowserPlugin({ url: 'http://localhost:3000' })
  ],
	watch : true
}
