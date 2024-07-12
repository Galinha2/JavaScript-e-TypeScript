const recebeCpf = [];
const cpfRecebido = [];
class introduzCpf {
    constructor(cpf) {
        this.cpf = cpf;
    };

    recebeCPF(cpf) {
        cpfRecebido.push(cpf);
        console.log(cpfRecebido[0]);
        for (const valor of cpf) {
            if (recebeCpf.length < 9 && valor >= 0) {
                recebeCpf.push(valor);
            };
        };
    };

    verificaCPF(valor) {
        let contador = valor;
        const calculo = [];
        for (const valor of recebeCpf) {
            const conta = valor * contador;
            contador -= 1;
            calculo.push(conta);
        };
        const somaCalculo = calculo.reduce((acumulador, valor) => {
            acumulador += valor;
            return acumulador;
        });
        const calculoFinal = 11 - (somaCalculo % 11);
        if (calculoFinal > 9) return 0;
        recebeCpf.push(calculoFinal);
    };

    resultadoFinal() {
        recebeCpf.splice(3, 0, '.');
        recebeCpf.splice(7, 0, '.');
        recebeCpf.splice(11, 0, '-');
        const cpfVerificado = recebeCpf.join('');
        console.log(cpfVerificado);
        if (cpfVerificado === cpfRecebido[0]) {
            console.log('CPF Correto.')
        } else {
            console.log('CPF Errado!');
        };
    };
};

const cpf = new introduzCpf();
cpf.recebeCPF('068.683.887-48')
cpf.verificaCPF(10);
cpf.verificaCPF(11);
cpf.resultadoFinal();
