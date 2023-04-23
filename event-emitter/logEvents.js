const {format} = require('date-fns')
const {v4:uuid} = require('uuid');
const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem + '写入成功');
    try {
        await fsPromises.access(path.join(__dirname, 'logs'));
    } catch (error) {
        if (error.code === 'ENOENT') {
            // 目录不存在，创建目录
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        } else {
            // 其他错误，抛出错误
            throw error;
        }
    }
    await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);
};

module.exports = logEvents;
