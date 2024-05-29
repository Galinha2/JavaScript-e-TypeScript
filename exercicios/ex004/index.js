let varA = ('A');
let varB = ('B');
let varC = ('C');

const varD = varA;
varA = varB;
varB = varC;
varC = varD;

console.log(varA, varB, varC);