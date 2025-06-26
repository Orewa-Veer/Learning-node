const os = require("os");
const freeMem = os.freemem();
const totalMem = os.totalmem();
const uptime = os.uptime();
console.log(freeMem);
console.log(totalMem);
console.log(uptime);
