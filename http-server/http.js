require('dotenv').config();
const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const PORT = process.env.PORT || 8080;
const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    let website_path;
    if(req.url === '/' || req.url === '/index.html'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        website_path = path.join(__dirname,'views','index.html');
        // fs.readFile(website_path,'utf-8',(err,data)=>{
        //     res.end(data);
        // })
        async function readWebsite(){
            try{
                const data = await fsPromises.readFile(website_path,'utf-8');
                res.end(data);
            }catch(err){
                console.error(err);
            }
        }
        readWebsite();
        const extension = path.extname(req.url);
        let contentType;
        switch(extension) {
            case '.css':
                contentType = 'text/css';
                break;
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.json':
                contentType = 'application/json';
                break;
            case '.jpg':
                contentType = 'image/jpeg';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.txt':
                contentType = 'text/plain';
                break;
            default:
                contentType = 'text/html';
        }
    }
})
server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})