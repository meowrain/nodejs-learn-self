const logEvents = require("./logEvents.js");
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
//initialize object
const myEmitter = new MyEmitter();

//add listener for the log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  //Emit event
  myEmitter.emit("log", "Log event emitted"); 
  /* 20230423        09:48:26        1f1e0bb5-a0e0-48db-a77e-675eb67f66e3    Log event emitted */
}, 2000);


/* 
这段代码是一个 Node.js 程序，
它使用了事件监听器的概念。
程序引入了一个名为 logEvents 的模块和 events 模块。接着，程序定义了一个 MyEmitter 类，
继承自 EventEmitter 类。
EventEmitter 类允许对象发出事件，以便其他对象可以监听这些事件并采取相应的操作。
接着，程序创建了一个 myEmitter 对象，它是 MyEmitter 类的一个实例。然后，程序为 log 事件添加了一个监听器，
当 log 事件被触发时，会调用 logEvents 函数并传递消息作为参数。
最后，程序在 2 秒后通过 myEmitter 对象触发了 log 事件，并传递了一个消息 'Log event emitted'。
*/


/* 

myEmitter.on 和 myEmitter.emit 是 EventEmitter 类的两个方法。

myEmitter.on 用于为特定事件添加一个监听器，当该事件被触发时，监听器函数将被调用。、
它接受两个参数：事件名称和监听器函数。

myEmitter.emit 用于触发指定事件。它接受两个或多个参数：事件名称和可选的参数，这些参数将传递给事件的监听器函数。

因此，区别在于，myEmitter.on 是用于添加事件监听器，而 myEmitter.emit 是用于触发事件并调用与之关联的监听器函数。


*/