class Pessoas {
    constructor(nome, apelido) {
        this.nome = nome;
        this.apelido = apelido;
    };

    get nomeCompleto() {
        console.log('getter');
        return this.nome, this.apelido;
    };

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        console.log('setter');
        this.nome = valor.shift();
        this.apelido = valor.join(' ');
    };
};

const p1 = new Pessoas('Henrique', 'Galinha');
p1.nomeCompleto = 'Henrique Miguel Santos Galinha';
console.log(p1.nome);
console.log(p1.apelido);
console.log(p1.nomeCompleto);