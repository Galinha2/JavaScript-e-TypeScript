const data = new Date();
const diaSeamana = data.getDay();

let diaSemanaTexto;

switch (diaSeamana) {
case 0:
    diaSemanaTexto = 'Domingo';
    break;
case 1:
    diaSemanaTexto = 'Segunda';
    break;
case 2:
    diaSemanaTexto = 'Terça';
    break;
case 3:
    diaSemanaTexto = 'Quarta';
    break;
case 4:
    diaSemanaTexto = 'Quinta';
    break;
case 5:
    diaSemanaTexto = 'Sexta';
    break;
case 6:
    diaSemanaTexto = 'Sabado';
    break;
}

console.log(diaSemanaTexto); 