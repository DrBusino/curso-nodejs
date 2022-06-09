const path = require("path");
console.log(path.sep);

const filePath = path.join("/content", "subfolder", "teste.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "teste.txt");
console.log(absolute);

console.log();
const dirName = path.resolve(__dirname);
console.log(dirName);
