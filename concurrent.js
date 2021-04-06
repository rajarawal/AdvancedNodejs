var logUpdate = require("log-update");
var toX = () => "X";
var delay = (seconds) =>
  new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
  });

var tasks = [
  delay(2),
  delay(3),
  delay(4),
  delay(5),
  delay(3),
  delay(2),
  delay(5),
  delay(9),
  delay(5),
  delay(1),
  delay(4),
  delay(3),
  delay(8),
  delay(7),
  delay(3),
  delay(1),
  delay(4),
  delay(2),
  delay(10),
];

class PromiseQueue {
  constructor(promises = [], concurrentCount = 1) {
    this.concurrent = concurrentCount;
    this.total = promises.length;
    this.todo = promises;
    this.running = [];
    this.completed = [];
  }
  get runAnother() {
    return this.running.length < this.concurrent && this.todo.length;
  }
  graphTasks() {
    var { todo, running, completed } = this;
    logUpdate(`
    todo : [${todo.map(toX)}]     
    running : [${running.map(toX)}]
    completed : [${completed.map(toX)}]
      `);
  }
  run() {
    while (this.runAnother) {
      var promise = this.todo.shift();
      promise.then(() => {
        this.completed.push(this.running.shift());
        this.graphTasks();
        this.run();
      });
      this.running.push(promise);
    }
  }
}
var delayQueue = new PromiseQueue(tasks, 2);
delayQueue.run();
