const os = require("os");

//info sobre o usuario
const user = os.userInfo();

console.log(user);

//metodo retorna o 'System uptime' em segundos

console.log(`system uptime is ${os.uptime()} segundos`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
