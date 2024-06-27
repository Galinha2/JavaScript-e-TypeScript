function calcula () {    
    const documento = document.querySelector('main');
    const botoes = documento.querySelectorAll('.btn');
    const display = documento.querySelector('.display')
    return {

        documento,
        botoes,
        display,

        inicia() {
            this.pegaKey()
        },

        escreve(texto) {
            console.log(this);
            this.display.value += texto;
        },

        fazconta() {
            const conta = display.value;

            try {
                conta = eval(conta);
                return this.display.value = conta;
            } catch (error) {
                return this.display.value = 'ERROR';
            }
        },

        pegaKey() {

            document.addEventListener('click', (event) => {
            let el = event.target

            if (el.classList.contains('btn-num')) {
                return this.escreve(el.textContent);
            } else if (el.classList.contains('btn-clear')) {
                return this.display.value = '';
            } else if (el.classList.contains('btn-igual')) {
                this.fazConta();
            }
            });
        }
    };
};

const calculadora = calcula();

calculadora.inicia();