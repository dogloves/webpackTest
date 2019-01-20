module.exports = {
  entry: __dirname + 'src/main.js', //入口文件
  output: {
    path: __dirname + '/public', //打包后文件存放的地方
    filename: 'bundle.js' //打包后输出文件名
  }
}