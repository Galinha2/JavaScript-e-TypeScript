let nomes = ['Henrique', 'Susana', 'Matilde', 'Lucas', 'Ruben', 'Ana', 'Fernando'];

const nome = nomes.splice(4, Number.MAX_VALUE);

console.log(nomes, nome);

const adiciona = nomes.splice(4, 0, 'Pedro');
console.log(nomes);