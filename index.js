// function hideString(str) {
//   return str.replace(/[a-zA-Z]/g, "X");
// }

// const hiddenString = hideString("Hello World");

// console.log(hiddenString);

// unother way of doing above work
// function hideString(str, done) {
//   done(str.replace(/[a-zA-Z]/g, "X"));
// }

// hideString("Hello world", (hiddenString) => {
//   console.log(hiddenString);
// });

// console.log("End");

// same work using asynchronously

// function hideString(str, done) {
//   process.nextTick(() => {
//     done(str.replace(/[a-zA-Z]/g, "X"));
//   });
// }

// hideString("Hello world", (hiddenString) => {
//   console.log(hiddenString);
// });

// console.log("End");

// Async way

function delay(delay, callback) {
  setTimeout(callback, delay * 1000);
}
console.log("Starting delay");
delay(2, () => {
  console.log("Two second delay");
  delay(1, () => {
    console.log("Tree Seconds delay");
    delay(1, () => {
      console.log("Four second delay");
    });
  });
});
