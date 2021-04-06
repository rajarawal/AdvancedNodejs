var delay = (seconds) =>
  new Promise((resolves, rejects) => {
    setTimeout(() => {
      resolves("The long delay has ended");
    }, seconds * 1000);
  });

// delay(1).then((msg) => {
//   console.log(msg);
// });
//or
delay(1)
  .then(console.log)
  .then(() => 22)
  .then((num) => console.log(`Hello World ${num}`));

console.log("End first tick");
