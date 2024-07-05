function Produto (nome, preco, stock) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        value: stock,
        writable: false,
        configurable: true
    });
};

const p1 = new Produto('PS5', 499.99, 'Sim');

console.log(p1);

for (let chave in p1) {
    console.log(chave);
};

function Produtos (nome, preco, stock) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
        stock: {
            enumerable: true,
            value: stock,
            writable: true,
            configurable: true
        },
    });
};

const p2 = new Produtos ('PS4', 324.98, 'Não');
console.log(p2);
