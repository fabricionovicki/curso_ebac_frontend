const form = document.getElementById('formulario');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const numA = document.getElementById('numA').value;
    const numB = document.getElementById('numB').value;
    const mensagem = document.getElementById('mensagem');
    const numeroA = parseFloat(numA);
    const numeroB = parseFloat(numB);

    mensagem.textContent = "";

    if (numA.trim() === "" || numB.trim() === "") 
    {
        mensagem.className = "mensagem negativo";
        return(mensagem.textContent = "Preencha ambos os campos.");
    };

    if (numeroB > numeroA) 
    {
        mensagem.className = "mensagem positivo";
        return(mensagem.textContent = "Formulário válido! O número B é maior que o número A.");
    } else {
        mensagem.className = "mensagem negativo";
        return(mensagem.textContent = "Formulário inválido! O número B deve ser maior que o número A.");
    };
});