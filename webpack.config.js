const path = require('path');

module.exports = {
	entry:"./src/app.js",
	output:{
		path:path.join(__dirname,'dist'),
		filename:'bundle.js'
	},
	module:{
		rules:[
			{
				loader:"babel-loader",
				test:/\.js$/,
				exclude:/node_modules/
			},
	    	{
      			test: /\.s?css$/,
      			use: [
        			'style-loader',
        			'css-loader',
        			'sass-loader'
      			]
    		},
			{
        		test: /\.(png|jpe?g)$/,
        		exclude:/node_modules/,
        		use:[
					{
						loader:'file-loader',
						options:{
							name:'[path][name].[ext]',
							publicPath:'../contents/images/products/',
							outputPath:'/assets/'
						}
					}
				]
      		}
		]
	},
	devtool:'cheap-module-eval-source-map',
	devServer:{
		contentBase:path.join(__dirname,'dist'),
		historyApiFallback:true
	}
};