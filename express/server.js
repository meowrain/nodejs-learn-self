const express = require("express");
const path = require("path");
const app = express();
//custom middleware logger
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.path}`);
    console.log("---------------------------");
    next();
})
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.join(__dirname,'/public')))
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});
app.get('/404',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','404.html'))
})
app.get('/*',(req,res)=>{
    res.redirect(301,"/404")
})
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
app.listen(8099, () => {
  console.log("The server is running on http://127.0.0.1:8099");
});
