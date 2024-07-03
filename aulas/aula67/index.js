const numeros = [1, 29, 4, 6, 12, 43, 7, 9, 10, 23, 76, 2];

const soma = numeros.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
}, 0);

console.log(soma)

const pares = numeros.filter(valor => valor % 2 === 0);
console.log(pares);

const dobro = numeros.map(valor => valor * 2);
console.log(dobro);