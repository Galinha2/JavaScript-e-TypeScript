function calcula() {
    const body = document.querySelector('body');
    const documento = document.querySelector('main');
    const botoes = documento.querySelectorAll('.btn');
    const display = documento.querySelector('.display');

    return {

        documento,
        botoes,
        display,

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

                return this.display.value = conta;
            } catch (error) {
                return this.display.value = 'ERRO';
            }
        },

        criaHistorico() {
            const barra = document.createElement('section');
            const criaH1 = document.createElement('h1');
            const close = document.createElement('button');

            barra.classList.add('barra');
            body.appendChild(barra);
            void barra.offsetWidth;
            barra.classList.add('show');

            criaH1.textContent = 'HISTÓRICO';
            barra.appendChild(criaH1);
        
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
                    return this.criaHistorico();
                }
            });
        }
    };
};

const calculadora = calcula();

calculadora.inicia();