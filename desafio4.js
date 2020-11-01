let valor = parseInt(gets());

let n100 = 0, n50 = 0, n20 = 0, n10 = 0, n5 = 0, n2 = 0, n1 = 0;
let resto = 0;

n100 = Math.floor(valor / 100);
resto = valor % 100;

n50 = Math.floor(resto / 50);
resto = resto % 50;

n20 = Math.floor(resto / 20);
resto = resto % 20;

n10 = Math.floor(resto / 10);
resto = resto % 10;

n5 = Math.floor(resto / 5);
resto = resto % 5;

n2 = Math.floor(resto / 2);
resto = resto % 2;

n1 = Math.floor(resto / 1);
resto = resto % 1;

console.log(valor);
console.log(`${n100} nota(s) de R$ 100,00`);
console.log(`${n50} nota(s) de R$ 50,00`);
console.log(`${n20} nota(s) de R$ 20,00`);
console.log(`${n10} nota(s) de R$ 10,00`);
console.log(`${n5} nota(s) de R$ 5,00`);
console.log(`${n2} nota(s) de R$ 2,00`);
console.log(`${n1} nota(s) de R$ 1,00`);

