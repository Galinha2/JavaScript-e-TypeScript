function meuEscopo () {
    const formulario = document.querySelector('.form');
    const result = document.querySelector('.resultado');
    const resultNeg = document.querySelector('.resultadoNegativo');

    function pegaResultado (enviar) {
        enviar.preventDefault();

        const wheight = parseInt(formulario.querySelector('.peso').value);
        const height = parseFloat(formulario.querySelector('.altura').value);

        const imc = wheight / (height * height)

        if (imc < 18.5) {
            result.innerHTML = `O seu imc é ${imc.toFixed(2)} (Abaixo do Peso)`;
        } else if (imc >= 18.5 && imc <= 24.9) {
            result.innerHTML = `O seu imc é ${imc.toFixed(2)} (Peso Normal)`;
        } else if (imc >= 25 && imc <= 29.9) {
            result.innerHTML = `O seu imc é ${imc.toFixed(2)} (Sobrepeso)`;
        } else if (imc >= 30 && imc <= 34.9) {
            result.innerHTML = `O seu imc é ${imc.toFixed(2)} (Obesidade Grau 1)`;
        } else if (imc >= 35 && imc <= 39.9) {
            result.innerHTML = `O seu imc é ${imc.toFixed(2)} (Obesidade Grau 2)`;
        } else if (imc >= 40) {
            result.innerHTML = `O seu imc é ${imc.toFixed(2)} (Obesidade Grau 3)`;
        } else {
            resultNeg.innerHTML = `Valor introduzido inválido`;
        }
        console.log(wheight, height);
        console.log(typeof(wheight), typeof(height));
        
    }
    
    formulario.addEventListener('submit', pegaResultado);
}

meuEscopo();