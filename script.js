const botao = document.getElementById("btnComecar");

const inicio = document.getElementById("inicio");

const ceu = document.getElementById("ceu");

botao.addEventListener("click", () => {

    inicio.classList.add("escondido");

    ceu.classList.remove("escondido");

});
