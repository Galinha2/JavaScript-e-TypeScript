function* geradoras() {
    yield 'Valor1';
    yield 'Valor2';
    yield 'Valor3';
};

let g1 = geradoras();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);