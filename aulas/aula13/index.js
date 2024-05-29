//                0123456789
let textoTeste = 'Um exemplo';

console.log(`Ao procurarmos o que se encontra no index 1 temos o: ${textoTeste [1]}`);
console.log(`Ao procurarmos em qual index começa a frase exemplo temos o: ${textoTeste.indexOf('exemplo')}`);
console.log(textoTeste.replace('Um', 'Outro'));
console.log(textoTeste.replace(/exemplo/g, '#$%&/'))
console.log(`Esta STR tem o tamanho de ${textoTeste.length} caracteres contando o 0. `)
console.log(textoTeste.toUpperCase());
console.log(textoTeste.toLocaleLowerCase());