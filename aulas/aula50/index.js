function funcao() {
    
    let total = 0;

    for (let numero of arguments) {
        total += numero
    }
    console.log(total)
};

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2);

function conta (acumulador, contador, ...numeros) {

    for (let numero of numeros) {
        contador += numero
    }
    console.log(contador)
}

conta('+', 5, 10, 9)