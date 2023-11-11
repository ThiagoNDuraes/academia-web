// script.js

// Função para validar o formulário de cadastro
function validarCadastro() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var idade = document.getElementById("idade").value;

    if (nome === "" || email === "" || idade === "") {
        alert("Por favor, preencha todos os campos.");
        return false; // Impede o envio do formulário
    }

    return true; // Permite o envio do formulário
}

// Adicionar um evento de "submit" ao formulário
var formulario = document.getElementById("cadastro-form");
formulario.addEventListener("submit", function (event) {
    if (!validarCadastro()) {
        event.preventDefault(); // Impede o envio do formulário se a validação falhar
    }
});
