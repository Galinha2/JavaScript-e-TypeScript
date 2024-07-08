const cpf = [];

function mostraCpf() {
    criaCPF();
    validaCpf(10);
    validaCpf(11);
    cpf.splice(3, 0, '.');
    cpf.splice(7, 0, '.');
    cpf.splice(11, 0, '-');
    const cpfInteiro = cpf.join('');
    console.log(cpfInteiro);
    const cpfNumber = cpfInteiro.replace(/[.-]/g, '');
    const cpfToString = parseInt(cpfNumber, 10);
    console.log(cpfToString)
    console.log(typeof(cpfToString));
};

function criaCPF () {
    while (cpf.length < 9) {
        let numero = Math.round(Math.random() * 9);
        cpf.push(numero);
    };
};

function validaCpf (contador) {
    this.contador = contador;
    let soma = [];
    for (let valor of cpf) {
        const calculo = valor*contador;
        contador--;
        soma.push(calculo);
    };
    const somaTotal = soma.reduce((acumulador, valor) => {
        acumulador += valor;
        return acumulador;
    });
    const calculoTotal = 11 - (somaTotal % 11);
    const calculoFinal = calculoTotal <= 9 ? calculoTotal : 0; 
    cpf.splice(cpf.length, 0, calculoFinal);
};

mostraCpf();
