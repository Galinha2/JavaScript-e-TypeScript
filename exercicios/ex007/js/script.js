function meuEscopo() {
    const formulario = document.querySelector('.form');
    const escrever = document.querySelector('.resultado');

    function receberClasses (evento) {
        evento.preventDefault();

        const nome = formulario.querySelector('.nome');
        const sobreNome = formulario.querySelector('.sobreNome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');

        const pessoas = [nome.value, sobreNome.value, peso.value, altura.value];

        escrever.innerHTML += `${pessoas} <br />`;
    }

    formulario.addEventListener('submit', receberClasses);
}

meuEscopo();