function numero(random) {
    if (random % 3 === 0 && random % 5 === 0) return 'FizzBuzz';
    if (random % 3 === 0) return 'Fizz';
    if (random % 5 === 0) return 'Buzz';
    else return (random);   
}

for (i = 0; i <= 101; i++) {
    const random = Math.floor(Math.random() * (0 + 101));
    console.log(random, numero(random));
}