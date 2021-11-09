const input = require("readline-sync");

console.log("== Olá! Seja bem-vindo(a)! ==");
const idade = input.question("Qual sua idade?");


if (idade >=18 && idade <21) {
    console.log("Entrar você entra, mas fica sem cervejinha.");
} else if (idade >=21) {
    console.log("Faz o que tu quiseres.");
} else {
    console.log("Vai subir ninguém");
};