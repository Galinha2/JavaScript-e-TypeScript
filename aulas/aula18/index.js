 const henrique = {
    nome: ['henrique', 'maria'],
    sobrenome: 'galinha',
    idade: 21,
};

 console.log(henrique.nome[0]);

 function criaPessoa(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    }
 };

 const pessoa = criaPessoa('Henrique', 'Galinha', 25);
 const pessoa1 = criaPessoa('Susana', 'Pina', 22);
 const pessoa2 = criaPessoa('Matilde', 'Pina', 16);
 const pessoa3 = criaPessoa('Lucas', 'Pina', 7);

 console.log(pessoa.sobrenome);
 console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);
