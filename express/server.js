const express = require("express");
const path = require("path");
const app = express();
require('dotenv').config(); // 读取.env文件
const PORT = process.env.PORT || 3500;  // 获取环境变量
//custom middleware logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  console.log("---------------------------");
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/subdir", require("./router/subdir"));
app.use("/", require("./router/mainPage"));
app.use("/employee",require("./router/api/employee"))
// app.use("/sub",require("./router/api/employee"))
// app.use();

//chaining route handlers

// const one = (req,res,next)=>{
//     console.log('one');
//     next();
// }
// const two = (req,res,next)=>{
//     console.log('two');
//     next();
// }
// const three = (req,res,next)=>{
//     console.log('Three');
//     res.send('Finished');
// }
// app.get('/chain(.html)?',[one,two,three]);
app.listen(PORT, () => {
  console.log(`The server is running on http://127.0.0.1:${PORT}`);
});
