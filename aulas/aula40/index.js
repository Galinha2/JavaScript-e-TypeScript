const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i in numeros) {

    console.log(numeros[i]);

    if (numeros[i] === 2) {
        console.log('pulei o numero 2')
        continue
    } 

    if (numeros[i] === 6) {
        console.log('cortei no 6');
        break
    }
}
