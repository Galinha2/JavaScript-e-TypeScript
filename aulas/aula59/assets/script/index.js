function Calcula() {
    const body = document.querySelector('body');
    const documento = document.querySelector('main');
    const botoes = documento.querySelectorAll('.btn');
    const display = documento.querySelector('.display');

    this.documento = documento;
    this.botoes = botoes;
    this.display = display;
    this.contas = [],

    this.inicia = () => {
        pegaKey();
    };

    const escreve = (texto) => {
        this.display.value += texto;
    };

    const fazConta = (value) => {
        let conta = value;

        try {
            conta = eval(conta);

            if (!conta) {
                return this.display.value = ('ERRO');
            }

            this.contas.push(`${value} = ${conta}`);

            let barra = document.querySelector('.textH');
            if (barra) {
                let criaP = document.createElement('p');
                criaP.classList.add('pH');
                criaP.textContent = `${value} = ${conta}`;
                barra.appendChild(criaP);
            }
            this.display.value = conta;
        } catch (error) {
            return this.display.value = 'ERRO';
        }
    };

    const criaHistorico = () => {
        const barra = document.createElement('section');
        const criaH1 = document.createElement('h1');
        const close = document.createElement('button');
        const text = document.createElement('section');


        barra.classList.add('barra');
        body.appendChild(barra);
        void barra.offsetWidth;
        barra.classList.add('show');

        close.classList.add('close');
        close.textContent = 'X';
        barra.appendChild(close);

        criaH1.textContent = 'Histórico';
        barra.appendChild(criaH1);

        text.classList.add('textH');
        barra.appendChild(text);

        const recentContas = this.contas.slice(-10);
        for (const conta of recentContas) {
            const criaP = document.createElement('p');
            criaP.classList.add('pH');
            criaP.textContent = conta;
            text.appendChild(criaP);
        }

        return barra, criaH1, close;
    };

    const pegaKey = () => {

        document.addEventListener('click', (event) => {
            let el = event.target;

            if (el.classList.contains('btn-num')) {
                return escreve(el.textContent);
            } else if (el.classList.contains('btn-clear')) {
                return this.display.value = '';
            } else if (el.classList.contains('btn-igual')) {
                let values = this.display.value;
                return fazConta(values);
            } else if (el.classList.contains('historico')) {
                const cl = document.querySelector('.close');
                if (cl) {
                    cl.parentElement.remove();
                };
                return criaHistorico();
            } else if (el.classList.contains('close')) {
                el.parentElement.remove();
            }
        });
    }
};

const calculadora = new Calcula();
calculadora.inicia();

