const os = require("os");
const { filesize } = require("filesize");
function getSystemInfo() {
  console.log("当前系统版本：" + os.version());
  console.log("当前系统类型：" + os.type());
  console.log("机器名称： " + os.hostname());
  console.log("平台类型：" + os.platform());
  console.log("CPU: " + os.cpus()[0].model);
  console.log("本机ip: " + os.networkInterfaces().WLAN[4].address);
  console.log("系统已经上线：" + Math.round(os.uptime() / 60 / 60) + "小时");
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  console.log("剩余内存：" + filesize(freeMem, { unit: "GiB" }));
  console.log("总内存：" + filesize(totalMem, { unit: "GiB" }));
  // console.log(__dirname + " " + __filename); //获取当前文件目录+ 文件名
}
// exports.getSystemInfo = getSystemInfo;
module.exports = { getSystemInfo }; //导出为对象
// module.exports = getSystemInfo; //导出函数
