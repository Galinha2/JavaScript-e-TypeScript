function factoryFunction(nome, sobreNome, altura, peso) {
    return {
        nome: 'pedro',
        sobreNome,
        peso: peso,
        altura: altura,
        get nomeCompleto() {
            return `${this.nome} e ${this.sobreNome}`
        },

        get imc() {
            const imcc = this.peso / (this.altura ** 2)
            return imcc.toFixed(2);
        }
    };
}

const p1 = factoryFunction('henrique', 'galinha', '1.76', '76')
const p2 = factoryFunction('Susana', 'Pina', '1.65', '64')

console.log(p1.nomeCompleto);
console.log(p1.imc);
console.log(p2.nomeCompleto);