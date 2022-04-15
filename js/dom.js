let titulo = document.querySelector("#titulo")
let botonJugas = document.querySelector(".jugas")
let secccionQuizz = document.querySelector(".quizz")
//Variables contenedoras
let divCategoriasDeJuego = document.querySelectorAll(".categorias")
let contenedorGeneralPreguntas = document.querySelectorAll(".contenedor__preguntas__general > .contenedores")
let preguntasUCM = document.querySelectorAll(".contenedor__preguntas__UCM > .ucm")
let preguntasXMEN = document.querySelectorAll(".xmen")
let preguntasTODO = document.querySelectorAll(".todo")
let arrPreguntas = [preguntasUCM, preguntasXMEN, preguntasTODO]
let botonesCategoriasDeJuego = document.querySelectorAll(".categorias > button")
//Botones de juego
let botonUCM = document.querySelector("#botonUCM")
let botonXMEN = document.querySelector("#botonXMEN")
let botonTODO = document.querySelector("#botonTODO")
let arrBotones = [botonUCM, botonXMEN, botonTODO]
//Contadores
let contadorPreguntas
let contadorAcertadas

// Empieza el juego
for (let i = 0; i < divCategoriasDeJuego.length; i++) {
    divCategoriasDeJuego[i].classList.add("fadeOut")
}
for (let i = 0; i < contenedorGeneralPreguntas.length; i++) {
    contenedorGeneralPreguntas[i].classList.add("fadeOut")
}

// Se clickea el boton ¿JUGAS?
botonJugas.addEventListener("click", fadeOutInicial)
function fadeOutInicial() {
    //Se oculta ese boton, y la presentacion del Inicio
    botonJugas.classList.toggle("fadeOut")
    titulo.classList.toggle("fadeOut")
    // Se muestran las categorias para jugar
    for (let i = 0; i < divCategoriasDeJuego.length; i++) {
        divCategoriasDeJuego[i].classList.toggle("fadeOut")
    }

}
//Mostrar categorias y elegir juego
function mostrarCategorias() {
    for (let i = 0; i < divCategoriasDeJuego.length; i++) {
        console.log(i); // esto devuelve 0
        divCategoriasDeJuego[i].addEventListener("click", elegirJuego)
    }

//Elegir Juego
function elegirJuego() {
    console.log(this); //y si apreto los botones me duelve el codigo html como? podemos sacar el for linea 43 de ah
    switch (this) {
        case 0:
            botonUCM.classList.add("buttonSelected")
            botonXMEN.classList.add('fadeOut');
            botonTODO.classList.add('fadeOut');
            break;

        case 1:
            botonXMEN.classList.add("buttonSelected")
            botonUCM.classList.add('fadeOut');
            botonTODO.classList.add('fadeOut');
            break;

        case 2:
            botonTODO.classList.add("buttonSelected")
            botonUCM.classList.add('fadeOut');
            botonXMEN.classList.add('fadeOut');
            break;

        default:
            break;
    }
}
mostrarCategorias()