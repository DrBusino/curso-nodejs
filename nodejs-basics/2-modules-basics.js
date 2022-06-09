//modules - codigo enapsulado (only share minimum)
//CommonJS - todo arquivo no node é um modulo (by default)

const names = require("./3-names");
const data = require("./5-forma-alternativa-modules");
const sayHi = require("./4-utils");

require("./6-export-modulos-inteiros");

sayHi(names.pedro);
sayHi(names.joao);
console.log(data);
console.log();
