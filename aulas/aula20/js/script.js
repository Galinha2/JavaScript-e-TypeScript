function meuEscopo() {
    const formulario = document.querySelector('.form');

    function sacarClasse (evento) {
        evento.preventDefault();

        const nome = formulario.querySelector('.nome');
        const sobreNome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');

        console.log(nome.value, sobreNome.value, peso.value, altura.value);
    }

    formulario.addEventListener('submit', sacarClasse);
}

meuEscopo();