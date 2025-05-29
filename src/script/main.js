function gerarNumeroAleatorio() {
    const numero = Math.floor(Math.random() * 100) + 1;
    console.log("Número aleatório gerado:", numero);
    return numero;
}

gerarNumeroAleatorio();