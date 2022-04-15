let titulo = document.querySelector("#titulo")
let botonJugas = document.querySelector(".jugas")
let secccionQuizz = document.querySelector(".quizz")
//Variables contenedoras
let divCategoriasDeJuego = document.querySelectorAll(".categorias__boton")
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
function fadeOut(array){
    for (let i = 0; i < array.length; i++) {
        array[i].classList.add("fadeOut")
    }
}
fadeOut(divCategoriasDeJuego)
fadeOut(contenedorGeneralPreguntas)


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

for (let i = 0; i < divCategoriasDeJuego.length; i++) {
    divCategoriasDeJuego[i].addEventListener("click", elegirJuego)
}

//Elegir Juego
function elegirJuego() {
    switch (this.textContent) {
        case 'MCU':
            botonUCM.classList.remove("categorias__boton")
            botonUCM.classList.add("buttonSelected")
            botonXMEN.classList.add('fadeOut');
            botonTODO.classList.add('fadeOut');
            // preguntasUCM(preguntasUCM)
            break;

        case 'X-Men':
            botonXMEN.classList.remove("categorias__boton")
            botonXMEN.classList.add("buttonSelected")
            botonUCM.classList.add('fadeOut');
            botonTODO.classList.add('fadeOut');
            break;

        case 'TODO':
            botonTODO.classList.remove("categorias__boton")
            botonTODO.classList.add("buttonSelected")
            botonUCM.classList.add('fadeOut');
            botonXMEN.classList.add('fadeOut');
            break;

        default:
            break;
    }
}
for (let i = 0; i < preguntasUCM.length; i++) {
    preguntasUCM[i].addEventListener("click", preguntasF)
}
function preguntasF() {
        this.addEventListener("click", function() {
            console.log(this)
        })
        
}
preguntasF()