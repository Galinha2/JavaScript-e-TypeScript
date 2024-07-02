let nomes = ['Henrique', 'Susana', 'Matilde'];

const novo = [...nomes];

const removido = novo.pop();

console.log(nomes, novo, removido);

const nome = 'Henrique, Miguel, Santos, Galinha';
const remove = nome.split(',');
console.log(remove);
