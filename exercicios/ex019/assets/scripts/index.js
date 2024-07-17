const recebeCpf = [];
const cpfRecebido = [];

class Form {
    constructor(cpf) {
        this.main = document.querySelector('main')
        this.cpf = cpf;
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
            this.escreveErro('.cpfErrado', 'O CPF que introduziu é invalido');
            console.log('CPF Errado!');
        };
    };

    pegaClique() {
        document.addEventListener('click', (event) => {
            let clic = event.target;

            if (clic.classList.contains('send')) {
                event.preventDefault();
                this.limpaErros();
                recebeCpf.splice(0, recebeCpf.length);
                cpfRecebido.splice(0, cpfRecebido.length);
                let nome = this.escolheClasse('.nome');
                let apelido = this.escolheClasse('.apelido');
                let user = this.escolheClasse('.usuario');
                let senha = this.escolheClasse('.senha');
                let repetir = this.escolheClasse('.repetirSenha');
                let cpf = this.escolheClasse('.cpf');

                cpfRecebido.push(cpf);
                console.log(cpfRecebido[0]);
                if (cpf === '') {
                    this.escreveErro('.cpfErrado', 'Cpf Inválido.')
                } else {
                    for (const valor of cpf) {
                        if (recebeCpf.length < 9 && valor >= 0) {
                            recebeCpf.push(valor);
                        };
                    };
                    this.verificaCPF(10);
                    this.verificaCPF(11);
                    this.resultadoFinal();
                };
            
                if (nome.length === 0) {
                    this.escreveErro('.nomeErrado', 'Precisa de introduzir um nome!');
                } else if (/\d/.test(nome)){
                    this.escreveErro('.nomeErrado', 'Precisa de introduzir um nome válido!');
                };
                if (apelido.length === 0) {
                    this.escreveErro('.apelidoErrado', 'Precisa de introduzir um apelido!')
                } else if (/\d/.test(apelido)){
                    this.escreveErro('.apelidoErrado', 'Precisa de introduzir um apelido válido!');
                };
                if (user.length < 3 || user.length > 12) {
                    this.escreveErro('.userErrado', 'Usuário tem de ter entre 3 a 12 letras!')
                    console.log(senha)
                };
                if (senha !== repetir) {
                    this.escreveErro('.repetirErrado', 'As senhas não coincidem!')
                };

                if (senha < 6 || senha > 12) {
                    this.escreveErro('.senhaErrado', 'Senha tem de ter entre 3 a 12 letras!')
                };
            };
        });
    };

    escolheClasse(classe) {
        const nome = this.main.querySelector(classe);
        return nome.value;
    };

    escreveErro(classe, erro) {
        const nome = document.querySelector(classe);
        const p = document.createElement('p');
        p.classList.add(`erro`);
        p.innerHTML += erro;
        nome.append(p);
    };

    limpaErros() {
        const error = document.querySelectorAll(`.erro`);
        error.forEach(erro => erro.remove());
    };
};

const form = new Form();
form.pegaClique();