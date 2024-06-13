let numerosPares = [];
let numerosImpares = [];

for (i = 0; i < 5; i++) {
    
    let random = Math.random() * 10;

    let inteiro = parseInt(random);
    
    if (inteiro % 2 === 0) {
        numerosPares.push(inteiro);
    } else {
        numerosImpares.push(inteiro);
    }
}

console.log(numerosPares);
console.log(numerosImpares);