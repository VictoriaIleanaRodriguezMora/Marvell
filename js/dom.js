// let arrBotones = [botonUCM, botonXMEN, botonTODO]
// let contenedorGeneralPreguntas = document.querySelectorAll(".contenedor__preguntas__general > .contenedores")
// let secccionQuizz = document.querySelector(".quizz")
// let arrPreguntas = [preguntasUCM, preguntasXMEN, preguntasTODO]
let titulo = document.querySelector("#titulo")
let botonJugas = document.querySelector(".jugas")
//Variables contenedoras
let divCategoriasDeJuego = document.querySelectorAll(".categorias__boton")
let contPregsUCM = document.querySelector(".contenedor__preguntas__UCM")
let contPregsXMEN = document.querySelector(".contenedor__preguntas__XMEN")
let contPregsTODO = document.querySelector(".contenedor__preguntas__TODO")
let arrContPregs = [contPregsUCM, contPregsXMEN, contPregsTODO]
// Div Preguntas
let preguntasUCM = document.querySelectorAll(".ucm")
let preguntasXMEN = document.querySelectorAll(".xmen")
let preguntasTODO = document.querySelectorAll(".todo")
let arrPregs = [preguntasUCM, preguntasXMEN, preguntasTODO]
//Opciones
let opcionesUCM = document.querySelectorAll(".ucm > .pregunta__opcion")
let opcionesXMEN = document.querySelectorAll(".xmen > .pregunta__opcion")
let opcionesTODO = document.querySelectorAll(".todo > .pregunta__opcion")
let opcionCorrecta = document.querySelectorAll(".opcion__correcta")
//Botones de juego
let botonesCategoriasDeJuego = document.querySelectorAll(".categorias > button")
let botonUCM = document.querySelector("#botonUCM")
let botonXMEN = document.querySelector("#botonXMEN")
let botonTODO = document.querySelector("#botonTODO")

//Contadores
let contadorPreguntas;
let contadorAcertadas;
let contadorDesacertadas;

// Terminan las variables

//Oculto lo que necesito para empezar
function fadeOut(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].classList.toggle("fadeOut")
    }
}
function fadeOutRemove(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].classList.remove("fadeOut")
    }
}
fadeOut(divCategoriasDeJuego)
fadeOut(arrContPregs)
fadeOut(preguntasUCM)
fadeOut(preguntasXMEN)
fadeOut(preguntasTODO)

// Empieza el juego
// Se clickea el boton ¿JUGAS?
botonJugas.addEventListener("click", fadeOutInicial)
function fadeOutInicial() {
    //Se oculta ese boton, y la presentacion del Inicio
    botonJugas.classList.toggle("fadeOut")
    titulo.classList.toggle("fadeOut")
    // Se muestran las categorias para jugar
    for (let i = 0; i < divCategoriasDeJuego.length; i++) {
        //Mostrar categorias y elegir juego
        divCategoriasDeJuego[i].classList.toggle("fadeOut")
    }

}
//Elegir Juego
botonUCM.onclick = () => {
    botonUCM.classList.remove("categorias__boton")
    botonUCM.classList.add("buttonSelected")
    botonXMEN.classList.add('fadeOut');
    botonTODO.classList.add('fadeOut');
    recorrerInicial(arrContPregs, 0, preguntasUCM, 0, opcionesUCM)

}
botonXMEN.onclick = () => {
    botonXMEN.classList.remove("categorias__boton")
    botonXMEN.classList.add("buttonSelected")
    botonUCM.classList.add('fadeOut');
    botonTODO.classList.add('fadeOut');
    recorrerInicial(arrContPregs, 1, preguntasXMEN, 0, opcionesXMEN)

}
botonTODO.onclick = () => {
    botonTODO.classList.remove("categorias__boton")
    botonTODO.classList.add("buttonSelected")
    botonUCM.classList.add('fadeOut');
    botonXMEN.classList.add('fadeOut');
    recorrerInicial(arrContPregs, 2, preguntasTODO, 0, opcionesTODO)

}
//Funcion para automatizar 
function recorrerInicial(arrGeneral, n, arrPregunta, n2, arrOpciones) {
    arrGeneral[n].classList.remove("fadeOut")
    console.log("yo");
    arrPregunta[n2].classList.remove("fadeOut")
    contarPuntos(arrOpciones)

}
function contarPuntos(opciones) {
    console.log("hola");
for (let i = 0; i < opcionesUCM.length; i++) {
    

    opcionesUCM[i].addEventListener("click", function () {
        contadorDesacertadas++
        console.log("chau");
        opcionCorrecta.onclick = () => {
            contadorAcertadas++
            console.log(contadorAcertadas)
        }
    })
}

}