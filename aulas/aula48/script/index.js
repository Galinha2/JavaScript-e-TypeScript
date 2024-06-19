function addLista() {

    const recebeBody = document.querySelector('body');
    const main = recebeBody.querySelector('.main')
    const mainDois = recebeBody.querySelector('#mainDois')
    const submit = recebeBody.querySelector('.adicionar');

    function escreveTarefa() {
        const escrever = recebeBody.querySelector('.texto').value;
        let dados = [];

        if (escrever === '') {
            main.innerHTML += `<p>Texto Inválido.</p>`;
        } else {
            mainDois.classList.add('mainDois');

            dados.push(escrever);
            
            let apagar = `<button>X</button>`;
            console.log(apagar);

            let tarefa = `<li>${dados}</li>`;

            let criaDiv = `<div> ${tarefa}${apagar} </div>`;

            mainDois.innerHTML += criaDiv

            escrever.value = '';
        }
    }

    function adicionar () {
        submit.addEventListener('click', function(event) {
            event.preventDefault()
            escreveTarefa()
        });
    }
    
    function apagarTarefa() {
        apagar.addEventListener('click', function() {
            apagar.classList.add('teste')
        })
    }

    adicionar()
    
}

addLista();