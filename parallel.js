var fs = require("fs");
var { promisify } = require("util");

var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);

var readdir = promisify(fs.readdir);

var delay = (seconds) =>
  new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
  });

Promise.race([
  delay(2),
  writeFile("readme.md", "Hello"),
  delay(5),
  writeFile("readme.txt", "hello"),
  delay(4),
])
  .then(() => readdir(__dirname))
  .then(console.log);
