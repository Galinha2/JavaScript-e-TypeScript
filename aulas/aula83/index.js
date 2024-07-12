class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    };

    static carregar() {
        console.log('A carregar todas as baterias.');
    };

};

const p1 = new Dispositivo('telemovel');

class Iphone extends Dispositivo {
    constructor(nome, marca, modelo) {
        super(nome);
        this.marca = marca;
        this.modelo = modelo;
    };

};

const i1 = new Iphone('Iphone', 'Apple', 'Pro Max');

console.log(i1);
Dispositivo.carregar();
