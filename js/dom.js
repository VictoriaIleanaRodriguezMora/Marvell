let botonJugas = document.querySelector(".jugas")
let titulo = document.querySelector("#titulo")
let secccionQuizz = document.querySelector(".quizz")
let divCategorias = document.querySelector(".categorias")
let divPreguntas = document.querySelector(".contenedor__preguntas")
let botonesCategorias = document.querySelectorAll(".categorias > button")

// Se cliake el boton ¿JUGAS?
botonJugas.addEventListener("click", fadeOutInicial)
    //Se oculta ese boton, y la presentacion del Inicio
function fadeOutInicial() {
    botonJugas.classList.add("fadeOut")
    titulo.classList.add("fadeOut")
        // Se muestran las categorias para jugar
    divCategorias.classList.add("fadeShow")
}

//Se muestran los 3 botones para elegir
function showCategorias() {
    for (let i = 0; i < botonesCategorias.length; i++) {
        botonesCategorias[i].addEventListener("click", function() {
            this.classList.remove("categorias__boton")
            this.classList.add("buttonSelected")
            botonesCategorias.classList.remove("categorias__boton")
            botonesCategorias.classList.add("fadeOut")
        })
    }
    divPreguntas.classList.add("fadeShow")
}
showCategorias()