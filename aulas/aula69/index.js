const numeros = [1, 29, 4, 6, 12, 43, 7, 9, 10, 23, 76, 2];

numeros.forEach(valor => console.log(valor));

let total = 0;

numeros.forEach(valor => total += valor);
console.log(total);