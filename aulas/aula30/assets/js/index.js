
function dataAtual () {
    let data = new Date();

    data = [data.getDay(), data.getDate(), data.getMonth(), data.getFullYear(), data.getHours(), data.getMinutes()];

    switch (data[0]) {
        case 0:
            data[0] = 'Domingo';
            break
        case 1:
            data[0] = 'Segunda-feira';
            break
        case 2:
            data[0] = 'Terça-feira';
            break
        case 3:
            data[0] = 'Quarta-feira';
            break
        case 4:
            data[0] = 'Quinta-feira';
            break
        case 5:
            data[0] = 'Sexta-feira';
            break
        case 6:
            data[0] = 'Sabado';
            break
    }

    switch (data[2]) {
        case 0:
            data[2] = 'Janeiro'
            break
        case 1:
            data[2] = 'Fevereiro'
            break
        case 2:
            data[2] = 'Março'
            break
        case 3:
            data[2] = 'Abril'
            break
        case 4:
            data[2] = 'Maio'
            break
        case 5:
            data[2] = 'Junho'
            break
        case 6:
            data[2] = 'Julho'
            break
        case 7:
            data[2] = 'Agosto'
            break
        case 8:
            data[2] = 'Setembro'
            break
        case 9:
            data[2] = 'Outubro'
            break
        case 19:
            data[2] = 'Novembro'
            break
        case 11:
            data[2] = 'Dezembro'
            break
    }

    return data;
}

function escreveData () {
    data = dataAtual();

    let textoh1 = document.querySelector('.data')

    textoh1.innerHTML = (`${data[0]} ${data[1]} de ${data[2]} de ${data[3]} ${data[4]}:${data[5]}`)

    console.log(`${data[0]} ${data[1]} de ${data[2]} de ${data[3]} ${data[4]}:${data[5]}`)
}

escreveData();