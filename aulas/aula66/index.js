const numeros = [1, 29, 4, 6, 12, 43, 7, 9, 10, 23, 76, 2];

const dobro = numeros.map(valor => valor * 2);
//console.log(dobro);

const pessoas = [
    {nome: 'Henrique', idade: 25},
    {nome: 'Susana', idade: 22},
    {nome: 'Matilde', idade: 17},
    {nome: 'Ana', idade: 59},
    {nome: 'Nuno', idade: 34},
    {nome: 'Fernando', idade: 59}
];

const user = pessoas.map(valor => valor.nome);
//console.log(user);

const comId = pessoas.map((valor, index) => {
    valor.id = index;
    return valor;
})
console.log(comId);
