function meuEscopo() {
    const formulario = document.querySelector('.form');
    const escrever = document.querySelector('.resultado');

    const pessoas = [];

    function receberClasses (evento) {
        evento.preventDefault();

        const nome = formulario.querySelector('.nome');
        const sobreNome = formulario.querySelector('.sobreNome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');

        pessoas.push({
            nome: nome.value, 
            sobreNome: sobreNome.value, 
            peso: peso.value, 
            altura: altura.value
        });

        console.log(pessoas);

        escrever.innerHTML += `Nome: ${nome.value} <br />`;
        escrever.innerHTML += `Sobre Nome: ${sobreNome.value} <br />`;
        escrever.innerHTML += `Peso: ${peso.value} <br />`;
        escrever.innerHTML += `Altura: ${altura.value} <br />`;
    }

    formulario.addEventListener('submit', receberClasses);
}

meuEscopo();
