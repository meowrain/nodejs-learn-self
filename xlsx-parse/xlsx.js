const xlsx = require("node-xlsx");
const path = require("path")
const workSheetFromFile = xlsx.parse(path.join(__dirname,'myFile.xlsx'))
console.log(workSheetFromFile[0].data)