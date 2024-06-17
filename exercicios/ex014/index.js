function numero() {
    const random = Math.floor(Math.random() * (0 + 101));

    if (random % 3 === 0 && random % 5 === 0) {
        console.log('FizzBuzz');
    } else if (random % 3 === 0) {
        console.log('Fizz');
    } else if (random % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(random);   
    }
}

numero();