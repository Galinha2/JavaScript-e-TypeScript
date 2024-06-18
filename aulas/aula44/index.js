function dados(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new RefError ('Os dados que introdoziu não são numeros.');
    } 

    return x + y;
}

try {
    console.log(dados(1, 3));
    console.log(dados('1', 3));
} catch(error) {
    console.log('Alguma coisa aconteceu.')
}