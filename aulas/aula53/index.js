function nome () {
    meuNome = 'Henrique';
    return function() {
        return meuNome;
    };
};

const seiLa = nome();

console.log(seiLa);