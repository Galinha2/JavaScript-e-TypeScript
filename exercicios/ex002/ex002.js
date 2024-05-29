const nome = 'Henrique Miguel';
const sobreNome = 'Santos Galinha';
const idade = 25;
const peso = 77;
const alturaEmM = 1.72; 

let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2024 - idade;

console.log(nome, sobreNome, 'tem', idade, 'anos,', 'pesa', peso + 'kg, tem', alturaEmM + 'm de altura.');
console.log('O seu IMC é de', imc, 'e nasceu no ano', anoNascimento + '.');