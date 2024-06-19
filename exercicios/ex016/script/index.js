function addLista() {

    const recebeBody = document.querySelector('body');
    const mainDois = recebeBody.querySelector('#mainDois')
    const submit = recebeBody.querySelector('.adicionar');

    function escreveTarefa() {
        const escrever = recebeBody.querySelector('.texto').value;
        let dados = []
        
        mainDois.classList.add('mainDois');

        dados.push(escrever);

        mainDois.innerHTML += `<li>${dados}</li>`
        console.log(dados)

    }

    function adicionar () {
        submit.addEventListener('click', function(event) {
            event.preventDefault()
            escreveTarefa()
        });
    }

    adicionar()
    
}

addLista();