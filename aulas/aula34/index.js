for (let i = 0; i <= 100; i ++ ) {
    let par = i % 2 === 0;

    if (par === true) {
        par = 'PAR';
    } else {
        par = 'IMPAR';
    }
    console.log(`${i} é ${par}`)
}

const frutas = ['Pera', 'Maça', 'Uva'];

for (i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}