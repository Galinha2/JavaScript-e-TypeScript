const num1 = Number(prompt('Digite aqui um numero:'));
const numId = document.getElementById('numOficial');
const texto = document.getElementById('textos');

numId.innerHTML = num1;
texto.innerHTML = `
    <p>Raiz quadrada de ${num1} é: ${num1 ** (1/2)}.</p>
    <p>É número inteiro?: ${Number.isInteger(num1)}</p>
    <p>É NaN?: ${Number.isNaN(num1)}</p>
    <p>Arredondado para baixo é: ${Math.floor(num1)}</p>
    <p>Arredondado para cima é: ${Math.ceil(num1)}</p>
    <p>Com duas casas decimais é: ${num1.toFixed(2)}</p>
`;
