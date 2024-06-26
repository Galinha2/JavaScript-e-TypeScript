(function(idade, peso, altura) {
    
    function nome(nomes) {
        return nomes
    };

    function sobreNome() {
        primNome = nome('Henrique');
        const meuSobre = 'Galinha';
        console.log(primNome, meuSobre);
    };

    function pesos() {
        console.log(idade, peso, altura)
    };

    sobreNome();
    pesos();

})(25, 76, 1.78);