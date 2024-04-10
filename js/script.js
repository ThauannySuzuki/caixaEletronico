
 let saldoAtual = 0

function definirSaldo(){
    let saldoInput = document.querySelector("#saldoinput")

    let novoSaldo = parseFloat(saldoInput.value)

    if(isNaN(novoSaldo) || novoSaldo < 0){
        alert("Digite um número válido.")
    }

    saldoAtual = novoSaldo

    alert("O saldo atual é: R$ " + saldoAtual.toFixed(2) )

    saldo.style.visibility="hidden"

}

function definirSaque(){
   let saqueInput = document.querySelector("#saqueinput")
   
   let novoSaque = parseFloat(saqueInput.value)

   if(isNaN(novoSaque) || novoSaque <0){
    alert("Digite um número válido") }

    saldoAtual-=novoSaque
    
   alert("Saque concluído com sucesso! Seu novo saldo é de: " + saldoAtual.toFixed(2))

   saque.style.visibility="hidden"
}

function definirDeposito(){
    let depositoInput = document.querySelector("#depositoinput")

    let novoDeposito = parseFloat(depositoInput.value)

    if(isNaN(novoDeposito) || novoDeposito<0){
        alert("Digite um número válido.")
    }

    saldoAtual+=novoDeposito

    alert("Deposito conclído! Seu novo saldo é de: " + saldoAtual.toFixed(2))

    deposito.style.visibility="hidden"
}

function definirTransferencia(){
    let contaTransferencia = document.querySelector("#contaTransferenciaInput")
    let numeroConta = parseFloat(contaTransferencia.value)

    let valorTransferencia = document.querySelector("#valorTransferenciaInput")
    let numeroValor = parseFloat(valorTransferencia.value)

    if(isNaN(numeroValor) || numeroValor<0){
        alert("Digite um número válido.")
    }

    saldoAtual-=numeroValor

    alert("Tranferencia para a conta " + numeroConta + " no valor de: " + numeroValor + " conclído com sucesso! Seu novo saldo é de: " + saldoAtual.toFixed(2))

    trans.style.visibility="hidden"
}

function modo_saldo(){
    let saldo = document.querySelector("#saldo")

    saldo.style.visibility="visible"
}

function modo_saque(){
    let saque = document.querySelector("#saque")

    saque.style.visibility="visible"
}
function modo_deposito(){
    let deposito = document.querySelector("#deposito")

    deposito.style.visibility="visible"

}
function modo_trans(){
    let transferencia = document.querySelector("#trans")

    trans.style.visibility="visible"
}
function modo_sair(){
    let sair = document.querySelector("#sair")

    sair.style.visibility="visible"
}

function fechar_modal(){
    let saldo = document.querySelector("#saldo")
    let saque = document.querySelector("#saque")
    let deposito = document.querySelector("#deposito")
    let trans = document.querySelector("#trans")

    saldo.style.visibility="hidden"
    saque.style.visibility="hidden"
    deposito.style.visibility="hidden"
    trans.style.visibility="hidden"

}

function cancelar(){
    let sair = document.querySelector("#sair")
    sair.style.visibility="hidden"
}


function sair(){
    window.close();

}


