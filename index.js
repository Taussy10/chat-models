// Later change the name 
const prompt = require("prompt-sync")();

// This pckage only work for common js 
// so before using this libarary in package.json 
// change to type to comonjs
const name = prompt("What's your name? ");
console.log(`Nice to meet you, ${name}!`);