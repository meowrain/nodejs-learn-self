const fsPromises = require('fs').promises;
const path = require('path');
async function readFile(){
    try {
        const data = await fsPromises.readFile(path.join(__dirname,'files','bag.txt'),'utf-8');
        console.log("File data:" + data);
        await fsPromises.writeFile(path.join(__dirname,'files','fsPromise.txt'),data);
        console.log("filewrite successfully");
        await fsPromises.appendFile(path.join(__dirname,'files','fsPromise.txt'),'\nNice to meet you')
    }catch(err) {
        console.error(err)
    }
}
readFile()