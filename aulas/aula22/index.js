/* 
    && - AND/E
    || - OR/OU
    !  - NOT/NÃO
*/

const usuario = 'Pedro';
const senha = 13553;

let vaiLogar = usuario === 'Pedro' && senha === 12345;
console.log(vaiLogar);

vaiLogar = usuario === 'Pedro' && senha === 13553;
console.log(vaiLogar);

vaiLogar = usuario === 'Pedro' || senha === 13553;
console.log(vaiLogar);

console.log(!true)