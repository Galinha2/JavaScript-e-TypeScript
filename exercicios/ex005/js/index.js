let nomeCompleto = prompt('Digite o seu nome compléto: ');

document.body.innerHTML += (`O seu nome completo é: <strong>${nomeCompleto}</strong>. <br />`);

document.body.innerHTML += (`O seu nome tem <strong>${nomeCompleto.replace(/ /g, '').length}</strong> letras. <br />`);
document.body.innerHTML += (`A segunda letra do seu nome é: <strong>${nomeCompleto[1]}</strong>. <br />`);
document.body.innerHTML += (`O primeiro indice da letra "a" do seu nome é: <strong>${nomeCompleto.indexOf('a')}</strong> <br />`);
document.body.innerHTML += (`O ultimo indice da letra "a" do seu nome é: <strong>${nomeCompleto.lastIndexOf('a')}</strong>. <br />`)
document.body.innerHTML += (`As ultimas 3 letras do seu nome são: <strong>${nomeCompleto.slice(-3)}</strong>. <br />`);
document.body.innerHTML += (`As palavras do seu nome são: <strong>${nomeCompleto.split(' ')}</strong>. <br />`);
document.body.innerHTML += (`<strong>${nomeCompleto.toUpperCase()}</strong> <br />`);
document.body.innerHTML += (`<strong>${nomeCompleto.toLowerCase()}</strong> <br />`);

//012345678 9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29
//Henrique  M  i  g  u  e  l     S  a  n  t  o  s     G  a  l  i  n  h  a
