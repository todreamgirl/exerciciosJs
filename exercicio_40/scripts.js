class contaBanco {
    constructor(saldoCorrente, saldoPoupanca, juros) {
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.juros = juros;
    }
    deposito(valor) {
        this.saldoCorrente += valor;
    }
    saque(valor) {
        this.saldoCorrente -= valor;
    }
    transferenciaPoupanca(valor) {
        this.saldoCorrente -= valor;
        this.saldoPoupanca += valor;
    }
    transferenciaCorrente(valor) {
        this.saldoPoupanca -= valor;
        this.saldoCorrente += valor;
    }
    jurosDeAniversario() {
        let juros = (this.saldoPoupanca * this.juros) / 100;  //pq essa logica nao funciona?
        this.saldoPoupanca += this.juros;
    }
}

class ContaEspecial extends contaBanco {
    constructor(saldoCorrente, saldoPoupanca, juros) {
        super(saldoCorrente, saldoPoupanca, juros * 2)
    }
}

let conta = new contaBanco(100, 500, 1);

console.log(conta);

conta.saque(50);

console.log(conta);

conta.deposito(500);

console.log(conta);

conta.transferenciaPoupanca(300);

console.log(conta);

conta.jurosDeAniversario();

console.log(conta);

let conta2= new ContaEspecial(1000,2000,1);

console.log(conta2);

conta2.saque(500);

console.log(conta2);

conta2.jurosDeAniversario();

console.log(conta2);
