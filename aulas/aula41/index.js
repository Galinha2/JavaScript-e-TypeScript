let random = [];
const maior = [];
const menor = [];

function retornaNum(maior, menor) {

    while (random.length < 2) {

        random.push(Math.floor(Math.random() * (0 + 100)));
    }

    if (random[1] > random[0]) {
        maior.push(random[1]);
        menor.push(random[0]);
    } else {
        maior.push(random[0]);
        menor.push(random[1]);
    }
}

retornaNum(maior, menor)

console.log(`O numero maior é o: ${maior}`);
console.log(`O numero menor é o: ${menor}`);
