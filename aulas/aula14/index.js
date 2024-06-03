let num1 = 0.7;
let num2 = 0.1;

num1 += num2;
num1 += num2;
num1 += num2;

conta = parseFloat(num1.toFixed(2));
console.log(conta.toFixed(2))
console.log(Number.isInteger(conta));