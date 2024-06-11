const documentos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const section = document.querySelector('#main');
const div = section.querySelector('div');

function escreveTexto () {

    for (let i = 0; i < documentos.length; i ++) {
        div.innerHTML += `<${documentos[i].tag}> ${documentos[i].texto} </ ${documentos[i].tag}>`;

        console.log(`<${documentos[i].tag}> ${documentos[i].texto} </ ${documentos[i].tag}>`)
    }
}

escreveTexto();