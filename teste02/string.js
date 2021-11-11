//concatenar

/*console.log('Hello' + ' ' + "World");

console.log('Hello' + "World");

myName = "Felipe";

console.log("Hello" +' '+ myName);

myName = "Felipe";
console.log(`Hello ${myName}`);*/

//--------------------

/*const x = 0
y = "apple"
console.log(x,"\n",y)*/

//--------------------

const input = require("readline-sync");
const mes = input.question("Digite um mes")

if (mes === "fevereiro") {
    console.log("TEM CARNAVAL")
} else if (mes === "junho") {
    console.log("TEM SÃO JOÃO")
} else if (mes === "dezembro"){
    console.log("MÊS DO GORDINHO DA BARBA BRANCA")
} else {
    console.log(`${mes} não é um mês festivo`)
}