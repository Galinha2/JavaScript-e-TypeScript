const pessoas = [
    {id: 1, nome: 'Henrique Galinha'},
    {id: 2, nome: 'Lucas Augusto'},
    {id: 3, nome: 'Susana Pina'},
];

const pessoaNova = {};

for (const pessoa of pessoas) {
    const {id} = pessoa;
    pessoaNova[id] = {...pessoa};
};

console.log(pessoaNova);
