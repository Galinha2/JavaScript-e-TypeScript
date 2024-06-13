
function dataAtual () {
    let data = new Date();

    data = [data.getDay(), data.getDate(), data.getMonth(), data.getFullYear(), data.getHours(), data.getMinutes()];

    if (data[4] < 10) {
        data[4] = `${0}${data[4]}`;
    }

    if (data[5] < 10) {
        data[5] = `${0}${data[5]}`;
    }

    let semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    let mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    data[0] = semana[data[0]];
    data[2] = mes[data[2]]; 

    return data;
}

function escreveData () {
    data = dataAtual();

    let textoh1 = document.querySelector('.data')

    textoh1.innerHTML = (`${data[0]}, ${data[1]} de ${data[2]} de ${data[3]} ${data[4]}:${data[5]}`)

    console.log(`${data[0]}, ${data[1]} de ${data[2]} de ${data[3]} ${data[4]}:${data[5]}`)
}

escreveData();