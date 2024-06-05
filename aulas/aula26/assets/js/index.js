const formulario = document.querySelector('.form');
const result = document.querySelector('.resultado');

function pegaResultado(enviar) {
    enviar.preventDefault();

    const wheight = Number(formulario.querySelector('.peso').value);
    const height = Number(formulario.querySelector('.altura').value);

    if (!wheight && !height) {
        result.innerHTML = `<p id='falso'>Valor introduzido inválido</p>`;
        return;
    }

    if (!wheight) {
        result.innerHTML = `<p id='falso'>O peso introduzido é inválido</p>`;
        return
    }

    if (!height) {
        result.innerHTML = `<p id='falso'>A altura introduzida é inválida</p>`;
        return
    }

    let imc = wheight / (height * height);
    imc = imc.toFixed(2);

    const resposta = ['(Abaixo do Peso)', '(Peso Normal)', '(Sobrepeso)', '(Obesidade Grau 1)', '(Obesidade Grau 2)', '(Obesidade Grau 3)']

    if (imc < 18.5) {
        result.innerHTML = `O seu imc é ${imc} ${resposta[0]}`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        result.innerHTML = `O seu imc é ${imc} ${resposta[1]}`;
    } else if (imc >= 25 && imc <= 29.9) {
        result.innerHTML = `O seu imc é ${imc} ${resposta[2]}`;
    } else if (imc >= 30 && imc <= 34.9) {
        result.innerHTML = `O seu imc é ${imc} ${resposta[3]}`;
    } else if (imc >= 35 && imc <= 39.9) {
        result.innerHTML = `O seu imc é ${imc} ${resposta[4]}`;
    } else if (imc >= 40) {
        result.innerHTML = `O seu imc é ${imc} ${resposta[5]}`;
    }

    console.log(wheight, height);
    console.log(typeof (wheight), typeof (height));

}

formulario.addEventListener('submit', pegaResultado);
