function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
};

const p1 = new Pessoa('Henrique', 'Galinha');

console.log(p1.nome, p1.sobrenome);
