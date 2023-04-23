const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname,'files','hello.txt'),'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})
const txt = "Hello World! This is a good world"
//write file
fs.writeFile(path.join(__dirname,'files','writeText.txt'),txt,{flag:'w'},(err)=>{
    if(err) throw err;
    console.log('write file success');
})
const stuJson = {
    name:'zhangsan',
    age:18,
    University: 'Tsinghua University'
}
fs.writeFile(path.join(__dirname,'files','student.json'),JSON.stringify(stuJson),(err)=>{
    if(err) throw err;
    console.log('write json file success');
})

//重命名
fs.rename(path.join(__dirname,"files","./hello.txt"),path.join(__dirname,"files","./bag.txt"),(err)=>{
    if(err) console.log(err);
    else console.log("重命名成功");
})
//exit on uncaught errors
process.on('uncaughtException', function (err) {
    console.error("There is an error:" + err);
    process.exit(1);
});