function Pessoas (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
};

Pessoas.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome
};

const pessoa1 = new Pessoas('Maria', 'Eduarda');
const pessoa2 = new Pessoas('Duarte', 'Patricio');

console.log(pessoa1.nomeCompleto(), pessoa2.nomeCompleto());
