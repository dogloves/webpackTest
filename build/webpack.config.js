var path = require('path')

module.exports = {
	devtool: 'eval-source-map', //为了生成map文件
	entry: './src/main.js', //入口文件，//__dirname 总是指向被执行 js 文件的绝对路径
	output: {
		path: path.posix.resolve(__dirname, '..', 'pbulic'), //打包后文件存放的地方
		filename: 'bundle.js', //打包后输出文件名
	},
	//开发环境服务设置
	devServer: {
		//contentBase: '/public', //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
		historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
		inline: true, //设置为true，当源文件改变时会自动刷新页面
		port: 8600, //设置默认监听端口，如果省略，默认为”8080“
	},
	module: {
		rules: [{
			test: /(\.jsx|\.js)$/, //用以匹配loaders所处理文件的拓展名的正则表达式（必须）
			use: {
				loader: 'babel-loader', //loader的名称（必须）
				options: {
					//cacheDirectory: true, //设置是否缓存
					//配置需要的模块。env为转换es5，react为解析react
					presets: ['env', 'react'],
				},
			},
			// include: /src/, //需要处理的文件(可选)
			exclude: /node_modules/, //屏蔽不需要处理的文件(可选)
		}, ],
	},
}