//Objetivo 1- Quando a agente clicar no botão superior direito temos que trocar o tema e alterar as cores da pagina para modo claro e modo escuro.
//Passo 1- Pegar no Js o elemento do HTML para torcar o tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
//Passo 2- Pegar no JS o elemento do HTML que corresponde ao body
const body = document.querySelector("body");
//Passo 3- Identificar o clique do usuário no botão para a troca de tema
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
//Passo 4- Adicionar o modo-escuro no body
botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

body.classList.toggle("modo-escuro");
    if (modoEscuroEstaAtivo){
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});
