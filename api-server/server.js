const express = require("express");
const app = express();
require('dotenv').config(); // 读取.env文件
const PORT = process.env.PORT || 3520;  // 获取环境变量
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT,(req,res)=>{
    console.log(`API-SERVER running on http://127.0.0.1:${PORT}`)
})