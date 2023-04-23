const path = require('path')
// console.log(__filename); //这也是获取当前文件的绝对路径
console.log("当前文件的绝对路径为：" + path.dirname(__filename)); //获取当前文件的绝对路径
console.log("当前文件的文件名: " + path.basename(__filename)); //返回当前文件的文件名，即当前文件的相对路径中的最后一个部分。
console.log("当前的工作目录为：" + process.cwd()); //输出当前进程的工作目录
console.log("当前文件相对工作目录的相对路径为：" + path.relative(process.cwd(), __dirname) + "\\" + path.basename(__filename)); //输出当前文件相对于工作目录的相对路径
console.log("当前文件的扩展名为：" + path.extname(__filename)); //返回当前文件的扩展名
console.log("当前文件的文件名(不包含扩展名)为：" + path.basename(__filename, path.extname(__filename))); //返回当前文件的文件名(不包含扩展名)
console.log(path.parse(__filename));//获取当前文件的路径信息,返回一个对象
console.log(path.resolve(__dirname,'local','bin'));//d:\git\note\Front\React\learn-react\nodejs-learning\Path-Library\local\bin
console.log(path.join('usr','local','bin'));//usr\local\bin 拼接路径
console.log(path.isAbsolute(__filename));//判断是否为绝对路径