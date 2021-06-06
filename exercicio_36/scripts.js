class contaBanco {
    constructor(agencia, contaTipo, saldo) {
        this.agencia = agencia;
        this.contaTipo = contaTipo;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
        console.log("Você recebeu um depósito!");
    }
    sacar(valor) {
        this.saldo -= valor;
        console.log("Você realizou um saque!");
    }
}

let nuConta = new contaBanco(1, 25, 1000);

nuConta.depositar(1000);
console.log(nuConta.saldo);

nuConta.sacar(500);
console.log(nuConta.saldo);