function Produto (nome, preco, stock) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: true,
        get: function() {
            return preco;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                console.log('ERRO')
                return;
            };
        }
    });
};

const p1 = new Produto('PS5', 499.99, 'Sim');
let oi = p1.stock = 'oiii'
console.log(p1.stock)
