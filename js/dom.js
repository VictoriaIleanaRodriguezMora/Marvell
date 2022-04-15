// let arrBotones = [botonUCM, botonXMEN, botonTODO]
// let contenedorGeneralPreguntas = document.querySelectorAll(".contenedor__preguntas__general > .contenedores")
// let secccionQuizz = document.querySelector(".quizz")
// let arrPreguntas = [preguntasUCM, preguntasXMEN, preguntasTODO]
let titulo = document.querySelector("#titulo")
let botonJugas = document.querySelector(".jugas")
//Variables contenedoras
let contenedorDeTodo = document.querySelector(".contenedor__preguntas__general")
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
let opcionIncorrecta = document.querySelectorAll("#opIncorrecta")
//Botones de juego
let botonesCategoriasDeJuego = document.querySelectorAll(".categorias > button")
let botonUCM = document.querySelector("#botonUCM")
let botonXMEN = document.querySelector("#botonXMEN")
let botonTODO = document.querySelector("#botonTODO")

//Contadores
let preguntasTotales = 0;
let contadorAcertadas = 0;
let contadorDesacertadas = 0;
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
contenedorDeTodo.classList.remove("contenedor__preguntas__general")
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
    contenedorDeTodo.classList.add("contenedor__preguntas__general")
    botonUCM.classList.remove("categorias__boton")
    botonUCM.classList.add("buttonSelected")
    botonXMEN.classList.add('fadeOut');
    botonTODO.classList.add('fadeOut');
    contPregsXMEN.classList.remove("contenedores")
    contPregsTODO.classList.remove("contenedores")

    recorrerInicial(arrContPregs, 0, preguntasUCM, 0)
    arrContPregs[1, 2]
    // contarPuntos()
    jugar(preguntasUCM)

}
botonXMEN.onclick = () => {
    contenedorDeTodo.classList.add("contenedor__preguntas__general")
    botonXMEN.classList.remove("categorias__boton")
    botonXMEN.classList.add("buttonSelected")
    botonUCM.classList.add('fadeOut');
    botonTODO.classList.add('fadeOut');
    contPregsUCM.classList.remove("contenedores")
    contPregsTODO.classList.remove("contenedores")
    recorrerInicial(arrContPregs, 1, preguntasXMEN)
    // contarPuntos()
    jugar(preguntasXMEN)

}
botonTODO.onclick = () => {
    contenedorDeTodo.classList.add("contenedor__preguntas__general")
    botonTODO.classList.remove("categorias__boton")
    botonTODO.classList.add("buttonSelected")
    botonUCM.classList.add('fadeOut');
    botonXMEN.classList.add('fadeOut');
    contPregsUCM.classList.remove("contenedores")
    contPregsXMEN.classList.remove("contenedores")
    recorrerInicial(arrContPregs, 2, preguntasTODO)
    // contarPuntos()
    jugar(preguntasTODO)

}
//Funcion para automatizar 
function recorrerInicial(arrGeneral, n, arrPregunta) {
    arrGeneral[n].classList.remove("fadeOut")
    console.log("yo");
    fadeOutRemove(arrPregunta)

}
function contarPuntos() {
    for (let i = 0; i < opcionIncorrecta.length; i++) {
        opcionIncorrecta[i].addEventListener("click", function () {
            contadorDesacertadas++
            console.log(`desacertadas${contadorDesacertadas}`);
        })
    }
    for (let x = 0; x < opcionCorrecta.length; x++) {
        opcionCorrecta[x].addEventListener("click", function () {
            contadorAcertadas++
            console.log(`acertadas${contadorAcertadas}`);
        })
    }

}
function jugar(arr) {
    for (let i = 0; i < preguntasUCM.length; i++) {
        preguntasTotales++
        contarPuntos(arr)

    }
}
jugar(preguntasUCM)