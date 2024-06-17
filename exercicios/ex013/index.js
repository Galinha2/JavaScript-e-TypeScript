function eRandom () {

    altura = Math.floor(Math.random() * (350 + 1000));
    largura = Math.floor(Math.random() * (350 + 1000));

    let frame = [];

    if (altura < largura){
        frame = true;
        console.log('A imágem está em modo paisagem.');
    } else {
        frame = false;
        console.log('A imágem está no modo retrato.');
    }

    console.log(frame)
    console.log(`Altura: ${altura}px - Largura: ${largura}px`);
}


eRandom();