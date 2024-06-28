function calcula() {
    const body = document.querySelector('body');
    const documento = document.querySelector('main');
    const botoes = documento.querySelectorAll('.btn');
    const display = documento.querySelector('.display');

    return {

        documento,
        botoes,
        display,
        contas: [],

        inicia() {
            this.pegaKey();
        },

        escreve(texto) {
            this.display.value += texto;
        },

        fazConta(value) {
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
        },

        criaHistorico() {
            const barra = document.createElement('section');
            const criaH1 = document.createElement('h1');
            const close = document.createElement('button');
            const text = document.createElement('section');


            barra.classList.add('barra');
            body.appendChild(barra);
            void barra.offsetWidth;
            barra.classList.add('show');

            criaH1.textContent = 'Histórico';
            barra.appendChild(criaH1);

            text.classList.add('textH');
            barra.appendChild(text);

            for (conta of this.contas) {
                if (this.contas.length > 10) {
                    barra.parentElement.remove();
                }

                const criaP = document.createElement('p');
                criaP.classList.add('pH')
                criaP.textContent = conta;
                text.appendChild(criaP);
            }

            close.classList.add('close');
            close.textContent = 'X';
            barra.appendChild(close);

            return barra, criaH1, close;
        },

        pegaKey() {

            document.addEventListener('click', (event) => {
                let el = event.target;

                if (el.classList.contains('btn-num')) {
                    return this.escreve(el.textContent);
                } else if (el.classList.contains('btn-clear')) {
                    return this.display.value = '';
                } else if (el.classList.contains('btn-igual')) {
                    let values = this.display.value;
                    return this.fazConta(values);
                } else if (el.classList.contains('historico')) {
                    const cl = document.querySelector('.close');
                    if (cl) {
                        cl.parentElement.remove();
                    };
                    return this.criaHistorico();
                } else if (el.classList.contains('close')) {
                    el.parentElement.remove();
                }
            });
        }
    };
};

const calculadora = calcula();

calculadora.inicia();
