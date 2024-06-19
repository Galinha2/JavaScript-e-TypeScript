function timmer() {

    const div = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');

    let segundos = 0;
    let minutos = 0;
    let horas = 0;

    let cornometro;

    function iniciaRelogio() {
        cornometro = setInterval(function () {
            segundos++;

            if (segundos === 59) {
                minutos++;
                segundos = 0;
            };

            if (minutos === 59) {
                horas++;
                minutos = 0;
            };

            if (horas == 24) {
                horas = 0;
            };

            let dizSeg = segundos < 10 ? `0${segundos}` : segundos;

            let dizMin = minutos < 10 ? `0${minutos}` : minutos;

            let dizHor = horas < 10 ? `0${horas}` : horas;

            return div.innerHTML = (`<p> ${dizHor}:${dizMin}:${dizSeg} </p>`);
        }, 1000);
    }

    iniciar.addEventListener('click', function (event) {
        div.classList.remove('pausado')
        clearInterval(cornometro);
        iniciaRelogio();
    });
    pausar.addEventListener('click', function (event) {
        div.classList.add('pausado');
        clearInterval(cornometro);
    });
    zerar.addEventListener('click', function (event) {
        clearInterval(cornometro);
        segundos = 0;
        horas = 0;
        minutos = 0;
        div.innerHTML = `00:00:00`;
    });
};

timmer();