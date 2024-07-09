const cpf = [];
const verificaNumCpf = [];

function mostraCpf() {
    criaCPF();
    validaCpf(10);
    validaCpf(11);
    cpf.splice(3, 0, '.');
    cpf.splice(7, 0, '.');
    cpf.splice(11, 0, '-');
    const cpfInteiro = cpf.join('');
    cpf.splice(0, cpf.length, cpfInteiro);
    console.log(`CPF recebido: ${cpfInteiro}`);
};

function criaCPF() {
    while (cpf.length < 9) {
        let numero = Math.round(Math.random() * 9);
        cpf.push(numero);
    };
};

function validaCpf(contador) {
    let soma = [];
    for (let valor of cpf) {
        const calculo = valor * contador;
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

function verificaCPF(contador) {
    const soma = [];
    const cpfNum = cpf[0];
    const cpfFormatado = cpfNum.replace(/[.-]/g, '');
    for (let valor of cpfFormatado) {
        if (verificaNumCpf.length < 9) {
            verificaNumCpf.push(valor);
        };
    };
    for (let valor of verificaNumCpf) {
        let valores = valor * contador;
        soma.push(valores);
        contador--;
    };
    const somaTudo = soma.reduce((acumulador, valor) => {
        acumulador += valor;
        return acumulador;
    });
    const conta = 11 - (somaTudo % 11);
    const calculoFinal = conta <= 9 ? conta : 0;
    verificaNumCpf.splice(verificaNumCpf.length, 0, calculoFinal);
};

function compara() {
    if (verificaNumCpf.join('') === cpf[0]) {
        console.log('CPF CORRÉTO!');
    } else {
        console.log('CPF ERRADO!')
    };
};

function mostraFuncToda() {
    mostraCpf();
    verificaCPF(10);
    verificaCPF(11);
    verificaNumCpf.splice(3, 0, '.');
    verificaNumCpf.splice(7, 0, '.');
    verificaNumCpf.splice(11, 0, '-');
    const cpfValidado = verificaNumCpf.join('');
    console.log(`CPF após validado: ${cpfValidado}`);
    compara();
};

mostraFuncToda();
