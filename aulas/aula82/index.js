class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    };

    ligar() {
        this.ligado = true;
        if (this.ligado) console.log('ligado');
    };

    desligar() {
        this.ligado = false;
        if(!this.ligado) console.log('desligado');
    };
};

const p1 = new Dispositivo('telemovel');

p1.desligar();

class Iphone extends Dispositivo {
    constructor(nome, marca, modelo) {
        super(nome);
        this.marca = marca;
        this.modelo = modelo;
    };

    ligar() {
        this.ligado = true;
        console.log('ligado');
    };
};

const i1 = new Iphone('Iphone', 'Apple', 'Pro Max');

i1.ligar();
console.log(i1);
