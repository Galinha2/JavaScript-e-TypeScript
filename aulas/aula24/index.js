const dataAtual = 7;

if (dataAtual >= 7 && dataAtual < 12) {
    console.log('Bom Dia');
} else if (dataAtual >= 12 && dataAtual < 19) {
    console.log('Boa Tarde');
} else if (dataAtual >= 20 && dataAtual <= 23) {
    console.log('Boa Noite');
} else if (dataAtual >= 0 && dataAtual < 7){
    console.log('Boa Madrugada');
} else {
    console.log('Valor introduzido não correspondente!');
}
