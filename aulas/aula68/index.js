const numeros = [1, 29, 4, 6, 12, 43, 7, 9, 10, 23, 76, 2];

console.log(numeros)

const pares = numeros.filter(valor => valor % 2 === 0);
console.log(pares);

const dobro = pares.reduce((acumuladores, valor) => acumuladores += valor);
console.log(dobro);