/*
VALORES FALSY EM JAVASCRIPT:
        *false
        0
        '' "" ```
        null/undefined
        NaN
*/

console.log('Pedro' && null && 'Maria');

const corUsuario = null;
const corDefault = corUsuario || 'preto';

console.log(corDefault);
console.log('Pedro' || null || 'Maria');