const {program} = require('commander')
const {format} = require('date-fns')

program
    .name('系统时间获取工具')
    .version('0.0.1')
    .description("获取当前时间,")
    .command('time')
    .action(() => {
        console.log("当前时间为：" + format(new Date(), 'yyyy-MM-dd\tHH:mm:ss'))
    })

program.parse(process.argv);
