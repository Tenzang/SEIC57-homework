//setTimer expect a callback

const { resolve } = require("path");

//wrap settimer in a promes so it work with them
const holdUp = (duration) => {
  return new Promise((resolve
    ) => {
    setTimeout(resolve, duration);
  });
};
//make this code work
holdUp(3000)
  .then(() => {
    console.log("time is passed");
  })
  .then(() => {
    console.log("also this appears to");
  });
