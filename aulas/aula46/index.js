function recebeData() {
    const data = new Date();

    return data.toLocaleTimeString('pt-pt', {
        hour12: false
    });
}

const dataTempo = setInterval(function() {
    console.log(recebeData());
}, 1000);

setTimeout(function() {
    clearInterval(dataTempo);
    console.log('Fim')
}, 5000);