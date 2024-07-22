
// const {Anas, Billa} =  require('./2.js');
const os = require('os');
const path = require('path');
console.log(path.sep);

const user = os.userInfo();
console.log(user);
console.log(`The system uptime is ${os.uptime()} seconds`);
const currOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
};
console.log(currOS);

// setInterval(() => {
//   console.log(Anas);
// }, 1000)


// setTimeout(() => {
//     console.log(Billa);
// }, 2000);

