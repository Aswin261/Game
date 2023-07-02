//1
const prompt = require("prompt-sync")();
const string = prompt("Enter the string");
// const string = "Vhagar is a green dragon belongs to green house";
const result = string.replaceAll("green", "red");
console.log(result);

// //2
// const n = 6.78979;
// const num = n.toFixed(2);
// console.log(num);

// //3
// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");
// console.log(result);

// //4
// let text1 = "Arrax was killed by";
// let text2 = "Vhagar!";
// let result = text1.concat(" ", text2);
// console.log(result);
