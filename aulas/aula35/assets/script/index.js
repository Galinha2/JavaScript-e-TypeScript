const documentos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const section = document.querySelector('#main');
const div = document.createElement('div');

function escreveTexto () {

    for (let i = 0; i < documentos.length; i ++) {
        let { tag, texto } = documentos[i];
        let tagCriada = document.createElement(tag);
        tagCriada.innerHTML = texto;
        div.appendChild(tagCriada);
    }
    section.appendChild(div);
}

escreveTexto();
