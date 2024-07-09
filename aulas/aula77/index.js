const verificaNumCpf = [];

function verificaCPF(cpf, contador) {
  const soma = [];
  const cpfNum = cpf;
  const cpfFormatado = cpfNum.replace(/[.-]/g, '');
  for (let valor of cpfFormatado) {
    if (verificaNumCpf.length < 9) {
      verificaNumCpf.push(valor);
    };
  };
  for (let valor of verificaNumCpf) {
    let valores = valor * contador;
    soma.push(valores);
    contador--;
  };
  const somaTudo = soma.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
  });
  const conta = 11 - (somaTudo % 11);
  const calculoFinal = conta <= 9 ? conta : 0;
  verificaNumCpf.splice(verificaNumCpf.length, 0, calculoFinal);
};

function compara(cpf) {
  if (verificaNumCpf.join('') === cpf) {
    console.log('CPF CORRÉTO!');
  } else {
    console.log('CPF ERRADO!')
  };
};

function mostraFuncToda(cpf) {
  verificaCPF(cpf, 10);
  verificaCPF(cpf, 11);
  verificaNumCpf.splice(3, 0, '.');
  verificaNumCpf.splice(7, 0, '.');
  verificaNumCpf.splice(11, 0, '-');
  const cpfValidado = verificaNumCpf.join('');
  console.log(`CPF recebido: ${cpf}`);
  console.log(`CPF após validado: ${cpfValidado}`);
  compara(cpf);
};

mostraFuncToda('810.063.269-36');
