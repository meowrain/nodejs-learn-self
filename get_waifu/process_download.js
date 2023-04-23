import {fork} from 'child_process'
for (let i = 0; i < 16; i++) {
  const childProcess = fork("./get_waifu2.js");
  childProcess.on("exit", (code) => {
    console.log(`子进程 ${childProcess.pid} 退出，退出码为 ${code}`);
  });
}
