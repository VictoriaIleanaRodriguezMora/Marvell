let botonJugas = document.querySelector(".jugas")
let titulo = document.querySelector("#titulo")
let secccionQuizz = document.querySelector(".quizz")
let divCategorias = document.querySelector(".categorias")
let contenedorPreguntas = document.querySelector(".contenedor__preguntas")
let botonesCategorias = document.querySelectorAll(".categorias > button")
let botonUCM = document.querySelector(".botonUCM")
let botonXMEN = document.querySelector(".botonXMEN")
let botonTODO = document.querySelector(".botonTODO")

contenedorPreguntas.classList.add("fadeOut")
divCategorias.classList.add("fadeOut")


// Se cliake el boton ¿JUGAS?
botonJugas.addEventListener("click", fadeOutInicial)
    //Se oculta ese boton, y la presentacion del Inicio
function fadeOutInicial() {
    botonJugas.classList.toggle("fadeOut")
    titulo.classList.toggle("fadeOut")
        // Se muestran las categorias para jugar
    divCategorias.classList.toggle("fadeOut")
}

//Se muestran los 3 botones para elegir
// function showCategorias() {
//     for (let i = 0; i < botonesCategorias.length; i++) {
//         botonesCategorias[i].addEventListener("click", function() {
//             this.classList.toggle("categorias__boton")
//             this.classList.add("buttonSelected")
//         })

//     }
//     contenedorPreguntas.classList.toggle("fadeOut")
// }
// showCategorias()function showCategorias() {
for (let i = 0; i < botonesCategorias.length; i++) {
    botonesCategorias[i].addEventListener("click", showCategories)

}

function showCategories() {
    this.classList.toggle("categorias__boton")
    this.classList.add("buttonSelected")
    contenedorPreguntas.classList.toggle("fadeOut")

}