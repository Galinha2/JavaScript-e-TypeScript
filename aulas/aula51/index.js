function multiplica(multiplicador) {
    return function (numero) {
        return multiplicador * numero;
    };
};

const duplica = multiplica(2);
const triplica = multiplica(3);
const quadriplica = multiplica(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
