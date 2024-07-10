class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    };

    fala() {
        console.log(this.nome, this.sobrenome, 'Está a falar')
    }
};

const pessoa1 = new Pessoa('Henrique', 'Galinha');
pessoa1.fala();