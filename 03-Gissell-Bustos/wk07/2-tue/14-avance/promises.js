//promises are evoluction of callback
// a way to handle or process data dfrom a asynchronos process, whenever that finishes
// recreate a cat in js:

// fs.readFile("flintstones.txt", "utf-8", (err, content) => {
//   //error first pattern
//   if (err) {
//     throw err; // dramatic return
//   }
//   console.log(content);
// });

// A promest wrapper around the above fs.readFile
input: filename;
output: filepromes;
const fs = require("fs");
const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf-8", (err, content) => {
      if (err) {
        reject(err); //invoke all the .catch callback
      }
      resolve(content);
    });
    //do some stuff
    //if work we call result function
    //else:
    //reject()
  });
};
//promises let us handle sussess and error separately
readFile("flintstones.txt")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("something bad happend", err);
  });

//you can attach multiples callbacks
//You can attach your then callbacks latter (and they still run !)
const flintstonesPromises = readFile("flintstones.txt");
flintstonesPromises.them((c) => {
  console.log(c.toUpperCase());
});
serTimeOut(() => {
  console.log(
    "this is happenig 11 seconds after the file is open but wr can still see the data"
  );
  console.log(content);
}, 11000);
