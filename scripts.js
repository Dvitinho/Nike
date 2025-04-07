let body = document.querySelector("body")
let tenis = document.querySelector(".tenis")
let carrinho = document.querySelector(".add-carrinho")

function mudarVisual(cor, imagem,) {
    body.style.background = cor
    tenis.src = imagem
    carrinho.style.background = cor

}
