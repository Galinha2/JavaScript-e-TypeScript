const nome = function() {
    console.log('Oi');
};

function teste(func) {
    console.log('Isto é a function teste.');
    func();
};

teste(nome);
