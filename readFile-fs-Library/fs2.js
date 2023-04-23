const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname,'files','bag.txt');

fs.open(filePath,'r',(err,fd)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("文件描述为：" + fd);
})
// //在这里进行文件读写操作
// fs.close(fd,(err)=>{
//     if(err) console.error(err);
//     console.log("文件已经关闭");
// })
