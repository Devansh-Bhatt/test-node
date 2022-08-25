const os = require('os')
const user = os.userInfo();
console.log(user);

//method returns system uptime in seconds 
console.log(`The system uptime is ${os.uptime()}`);
const currentos = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentos);