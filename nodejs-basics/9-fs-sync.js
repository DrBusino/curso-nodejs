const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");

const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Esse é o resultado: ${first} , ${second}`
);

//abaixo o codigo flag = a significa que quero adiciionar valores no arquivo e nao sobrepor.

/*writeFileSync(
  "./content/result-sync.txt",
  `Esse é o resultado: ${first} , ${second},
  {flag: 'a'}
  `
);*/
