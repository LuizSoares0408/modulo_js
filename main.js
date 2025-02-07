const form = document.getElementById('form-comparar');
let numeroA = document.getElementById('number-a');
let numeroB = document.getElementById('number-b');

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const mensagemResposta = document.getElementById("sucess-message");
    const mensagemSucesso = `O valor do número B é maior que o valor do número A - Válido`;
    const mensagemError = `O valor do número B é menor ou igual ao valor do número A - Inválido`;

    if(numeroB.value > numeroA.value) 
    {
        mensagemResposta.innerHTML= mensagemSucesso;
        mensagemResposta.style.display = "block";
    }
    else 
        mensagemResposta.innerHTML= mensagemError;
        mensagemResposta.style.display = "block";
})