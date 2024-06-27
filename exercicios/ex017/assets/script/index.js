function calcula () {    
    const documento = document.querySelector('main');
    const botoes = documento.querySelectorAll('.btn');
    const display = documento.querySelector('.display')
    return {

        documento,
        botoes,
        display,

        pegaKey() {
            document.addEventListener('click', function(event) {
            let el = event.target

            if (el.classList.contains('btn-num')) {
                return display.value += el.textContent;
            } else if (el.classList.contains('btn-clear')) {
                return display.value = '';
            };
            });
        },
    };
};

const calculadora = calcula()

calculadora.pegaKey();