function timmer() {
    let segundos = 0; 
    let minutos = 0;
    let horas = 0;
    let contador = setInterval(function() {
        segundos++
        console.log(horas, minutos, segundos)

        if (segundos === 59) {
            minutos++
            segundos = 0;
        } 

        if (minutos === 59) {
            horas++;
            minutos = 0;
        }

        if (horas === 24) {
            horas = 0;
        }
    }, 1000);

};

timmer();