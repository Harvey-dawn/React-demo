const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: "./app/main.js",  
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "all.js"
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
      // {
      //   test: /\.css/,
      //   loader: ExtractTextPlugin.extract("style-loader", "css-loader",{publicPath: './'})
      // }
		]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
  ],
	watch : true
}