require('dotenv').config();
const http = require('http');
const path = require('path');
const fs = require('fs')
const fsPromises = require('fs').promises;

const PORT = process.env.PORT || 3500;
const server = http.create((req,res)=>{

})