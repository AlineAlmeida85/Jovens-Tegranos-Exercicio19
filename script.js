function calcular() {
    salAntigo = parseFloat(document.getElementById("entradaSalario").value);

    let salAtual = " ";
    let porcentagem = " ";
    let aumento = " ";

    let porc20 = parseFloat((salAntigo * 20) / 100);
    let porc15 = parseFloat((salAntigo * 15) / 100);
    let porc10 = parseFloat((salAntigo * 10) / 100);
    let porc05 = parseFloat((salAntigo * 05) / 100);

    if(salAntigo <= 999) {
        salAtual = ("R$ ") + (salAntigo + porc20).toFixed(2);
        aumento = ("R$ ") + porc20.toFixed(2);
        porcentagem = ("20%");
    } else if(salAntigo <= 2999) {
        salAtual = ("R$ ") + (salAntigo + porc15).toFixed(2);
        aumento = ("R$ ") + porc15.toFixed(2);
        porcentagem = ("15%");
    } else if(salAntigo <= 7999) {
        salAtual = ("R$ ") + (salAntigo + porc10).toFixed(2);
        aumento = ("R$ ") + porc10.toFixed(2);
        porcentagem = ("10%");
    } else {
        salAtual = ("R$ ") + (salAntigo + porc05).toFixed(2);
        aumento = ("R$ ") + porc05.toFixed(2);
        porcentagem = ("05%");
    }

    novoSalario.innerHTML = salAtual;
    aum.innerHTML = aumento;
    porc.innerHTML = porcentagem;
  
}

