const produto = {
    nome: 'PS5',
    preco: 499.99
};

for (let c of Object.entries(produto)) {
    console.log(c[0], c[1]);
};

console.log(Object.values(produto));