const pessoa = {
    fala() {
        console.log(`${this.nome} está a falar`);
    }
};

function criaPesssoa(nome, sobrenome) {
    return Object.create(pessoa, {
        nome: {value: nome};
    })
};
const pessoa1 = criaPesssoa('Henrique', 'Galinha');

console.log(pessoa1.fala());