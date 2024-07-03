const numeros = [1, 29, 4, 6, 12, 43, 7, 9, 10, 23, 76, 2];

const maior = [];

for (num of numeros) {
    if (num >= 10) maior.push(num);
};

console.log(maior);

const maiorNew = numeros.filter(valor => valor >= 10);
//console.log(maiorNew);

//const maiorAr = numeros.filter((valor, indice, array) => console.log(valor, indice, array));

const pessoas = [
    {nome: 'Henrique', idade: 25},
    {nome: 'Susana', idade: 22},
    {nome: 'Matilde', idade: 17},
    {nome: 'Ana', idade: 59},
    {nome: 'Nuno', idade: 34},
    {nome: 'Fernando', idade: 59}
];

const numPessoas = pessoas.filter(valor => valor.nome.length > 6)
//console.log(numPessoas);

const numIdade = pessoas.filter(valor => valor.idade > 50)
//console.log(numIdade);

const numA = pessoas.filter(valor => valor.nome.endsWith('a'));
console.log(numA);
