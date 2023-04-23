const {program} = require('commander');
const os = require('os');
const {filesize} = require("filesize");

program
    .version('0.0.1')
    .option('--ver', '获取当前系统版本')
    .option('-t, --type', '获取当前系统类型')
    .option('--hostname', '获取当前机器名称')
    .option('--cpu', '获取当前电脑CPU')
    .option('--ip', '获取当前电脑ipv4地址')
    .option('-a, --all', '获取本机所有信息')
    .parse(process.argv);

const options = program.opts();

if (options.ver) {
    console.log(`当前系统版本：${os.version()}`);
}

if (options.type) {
    console.log(`当前系统类型：${os.type()}`);
}

if (options.hostname) {
    console.log(`当前机器名称：${os.hostname()}`);
}

if (options.cpu) {
    console.log(`当前电脑CPU：${os.cpus()[0].model}`);
}

if (options.ip) {
    const interfaces = os.networkInterfaces();
    const ips = [];
    Object.keys(interfaces).forEach(name => {
        interfaces[name].forEach(iface => {
            if (iface.family === 'IPv4' && !iface.internal) {
                ips.push(iface.address);
            }
        });
    });
    console.log(`当前电脑ipv4地址：${ips.join(', ')}`);
}
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
if (options.all) {
    getSystemInfo();
}
