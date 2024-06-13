function numeroRandom (min, max) {
    const random = Math.floor(Math.random() * (max - min) + min);
    return random;
}

const min = 1;
const max = 50;

let rand = [];

while (rand !== 10) { 
    rand = numeroRandom(min, max);
    console.log(rand);
}

console.log('--------------------------------');

do {
    rand = numeroRandom(min, max);
    console.log(rand);
} while (rand !== 15);