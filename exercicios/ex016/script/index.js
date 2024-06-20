function addLista() {

    const recebeBody = document.querySelector('body');
    const main = recebeBody.querySelector('.main');
    const mainDois = recebeBody.querySelector('#mainDois');
    const submit = recebeBody.querySelector('.adicionar');

    let teste = apagaGeral();
    mainDois.appendChild(teste);
    
    function criaButton() {

        let button = document.createElement('button');
        button.textContent = 'X';
        button.classList.add('apagar');
        
        return button;
    };

    function criaTarefa(texto) {
        tarefa = document.createElement('li');
        tarefa.textContent = texto;
        return tarefa;
    }

    function limpaInput() {
        const input = recebeBody.querySelector('.texto');
        input.value = '';
        input.focus();
    };

    function escreveTarefa() {
        const escrever = recebeBody.querySelector('.texto').value;

        if (escrever === '') {
            main.innerHTML += `<p>Texto Inválido.</p>`;
        } else {
            mainDois.classList.add('mainDois');

            let apagar = criaButton();

            let tarefa = criaTarefa(escrever);

            let criaDiv = document.createElement('div');
            criaDiv.classList.add('recebeDiv');
            criaDiv.appendChild(tarefa);
            criaDiv.appendChild(apagar);

            mainDois.appendChild(criaDiv);
            guardarTudo();
        };
    }

    function adicionar() {
        submit.addEventListener('click', function (event) {
            event.preventDefault()
            escreveTarefa()
            limpaInput();
        });
    }

    document.addEventListener('click', function (event) {
        let clique = event.target;
        event.preventDefault()

        let apagaTudo = apagaGeral()

        if (clique.classList.contains('apagar')) {
            clique.parentElement.remove();
        };

        if (clique.classList.contains('erase')) {
            mainDois.innerHTML = '';
            mainDois.appendChild(apagaTudo)
        };

        guardarTudo();
    });

    function guardarTudo () {
        const li = recebeBody.querySelectorAll('li');
        
        let dado = [];

        for (let liDito of li) {
            dado.push(liDito.textContent);
        };

        let saveAll = JSON.stringify(dado);
        localStorage.setItem('tarefas', saveAll);
        
    };
    
    function carregaTarefas() {
        const escrever = recebeBody.querySelector('.texto').value;
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas);
        
        for (let tarefaa of listaDeTarefas) {

            mainDois.classList.add('mainDois');

            let apagar = criaButton();

            let tarefa = criaTarefa(tarefaa);

            let criaDiv = document.createElement('div');
            criaDiv.classList.add('recebeDiv');
            criaDiv.appendChild(tarefa);
            criaDiv.appendChild(apagar);

            mainDois.appendChild(criaDiv);
        };
    };

    function apagaGeral () {
        const erase = document.createElement('button');
        erase.textContent = 'x';
        erase.classList.add('erase');

        return erase;
    };

    adicionar();
    carregaTarefas();
};

addLista();