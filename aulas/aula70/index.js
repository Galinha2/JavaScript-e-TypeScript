const pessoa = {};
pessoa.nome = 'Henrique';
pessoa.sobrenome = 'Galinha';

console.log(pessoa.nome, pessoa.sobrenome);

pessoa.falaNome = function () {
    console.log(`${this.nome} está a dizer o seu nome`);
};

pessoa.falaNome();

for (let c in pessoa) {
    console.log(pessoa[c]);
}