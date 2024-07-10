function Conta(banco, conta, saldo) {
    this.banco = banco;
    this.conta = conta;
    this.saldo = saldo;
};
Conta.prototype.verSaldo = function() {
    console.log(
        `Banco: ${this.banco} | ` +
        `Utilizador: ${this.conta} | ` +
        `Saldo disponivel: ${this.saldo.toFixed(2)}€`
    );
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.levantar = function(valor) {
    if (this.saldo >= valor) {
        this.saldo -= valor;
        this.verSaldo();
    } else {
        console.log('Montante Indisponivel');
    };
};

const conta1 = new Conta('Novo Banco', 'Henrique Galinha', 1094.62);
conta1.depositar(1000);
conta1.depositar(100);
conta1.levantar(2000);