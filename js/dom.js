let titulo = document.querySelector("#titulo")
let botonJugas = document.querySelector(".jugas")
let secccionQuizz = document.querySelector(".quizz")
//Variables contenedoras
let divCategoriasDeJuego = document.querySelector(".categorias")
let contenedorGeneralPreguntas = document.querySelectorAll(".contenedor__preguntas__general > .contenedores")
let preguntasUCM = document.querySelectorAll(".ucm")
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
divCategoriasDeJuego.classList.add("fadeOut")
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
    divCategoriasDeJuego.classList.toggle("fadeOut")

}
//Mostrar categorias y elegir juego
function mostrarCategorias() {
    for (let i = 0; i < divCategoriasDeJuego.length; i++) {
        console.log(i);
        divCategoriasDeJuego[i].addEventListener("click", elegirJuego([i]))
    }
}
//Elegir Juego
function elegirJuego(x) {
    console.log("hola");
    switch (x) {
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
function mostrarPreguntas(arrayPregs) {
    for (let i = 0; i < arrayPregs.length; i++) {
        arrayPregs[i].classList.add("fadeShow")
        console.log(arrayPregs[i])
        
    }
}
mostrarPreguntas(preguntasUCM)