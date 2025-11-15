const nomeUsuario = localStorage.getItem("nome_usuario");

if (nomeUsuario) {
    const elemento = document.createElement("h1");
    elemento.textContent = `Boas vindas ${nomeUsuario}`
    document.body.appendChild(elemento);

} else {
    const inputNome = document.createElement("input")
    inputNome.type = "text";
    inputNome.placeholder = "Digite seu nome aqui";
    inputNome.id = "campoNome";

    const inputBotao = document.createElement("input");

    inputBotao.type = "button";
    inputBotao.value = "Enviar";

    inputBotao.addEventListener("click", () => {
        const nomeDigitado = inputNome.value.trim();

        if (nomeDigitado) {
            localStorage.setItem("nome_usuario", nomeDigitado);
            location.reload();
        } else {
            alert("Por favor, digite um nome!");
        }
    });

    document.body.appendChild(inputNome);
    document.body.appendChild(inputBotao);
}
