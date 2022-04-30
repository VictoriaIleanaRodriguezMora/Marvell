//LUXON
const DateTime = luxon.DateTime
let fechaDeJuego = DateTime.now()
let mnsFechaDeJuego = (`Ultima vez el ${fechaDeJuego.toLocaleString()} a las ${fechaDeJuego.toLocaleString(DateTime.TIME_SIMPLE)}`)
//LUXON

//HTML
let titulo = document.querySelector("#titulo")
let botonJugas = document.querySelector(".jugas")
let botonJugarDeNuevo = document.querySelector(".jugarDeNuevo")
let score = document.querySelector("#score")

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
//
//Opciones
let opcionesUCM = document.querySelectorAll(".ucm > .pregunta__opcion")
let opcionesXMEN = document.querySelectorAll(".xmen > .pregunta__opcion")
let opcionesTODO = document.querySelectorAll(".todo > .pregunta__opcion")
let opcionesCorrectas = document.querySelectorAll(".opcion__correcta")
let opcionesIncorrectas = document.querySelectorAll("#opIncorrecta")
//Botones de juego
let botonTerminar = document.querySelector(".terminar")
let botonesCategoriasDeJuego = document.querySelectorAll(".categorias > button")
let botonUCM = document.querySelector("#botonUCM")
let botonXMEN = document.querySelector("#botonXMEN")
let botonTODO = document.querySelector("#botonTODO")
let divRanking = document.querySelector("#ranking")
let botonRanking = document.querySelector(".ranking")
let divRankingP = document.querySelectorAll("#ranking__p")
let rankingP = document.querySelectorAll(".ranking__p")
//Contadores
let preguntasTotales = 0;
let contadorAcertadas = 0;
let contadorDesacertadas = 0;
let limiteOpciones = 0;

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
fadeOut(divRankingP)
botonJugarDeNuevo.classList.add("fadeOut")
score.classList.add("fadeOut")
botonTerminar.classList.add("fadeOut")
contenedorDeTodo.classList.remove("contenedor__preguntas__general")
botonJugarDeNuevo.removeAttribute("href", "#header")

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
function botonesCat(botonPrincipal, segundoBoton, tercerBoton, contenedorUno, contenedorDos, botonFinish) {
    contenedorDeTodo.classList.add("contenedor__preguntas__general")
    botonPrincipal.classList.remove("categorias__boton")
    botonPrincipal.classList.add("buttonSelected")
    botonPrincipal.disabled = true
    segundoBoton.classList.add('fadeOut');
    tercerBoton.classList.add('fadeOut');
    botonFinish.classList.remove("fadeOut")
    contenedorUno.classList.remove("contenedores")
    contenedorDos.classList.remove("contenedores")
    divRanking.classList.add("fadeOut")
}
//Elegir Juego

//Almacenar Info
function almacenarInfo(vecesJugadas) {
    let dataJuego = JSON.parse(localStorage.getItem(vecesJugadas))
    let newData;
    if (dataJuego === false) {
        newData = 1;
        localStorage.setItem(vecesJugadas, newData)
    }
    else {
        newData = dataJuego += 1;
        localStorage.setItem(vecesJugadas, newData)
    }
    return newData;

}
//UCM
botonUCM.onclick = () => {
    almacenarInfo("vecesJugadasUCM")
    botonesCat(botonUCM, botonXMEN, botonTODO, contPregsXMEN, contPregsTODO, botonTerminar)
    recorrerInicial(arrContPregs, 0, preguntasUCM, 0)
    jugar(preguntasUCM)
    localStorage.setItem("ultVezJugadaUCM", mnsFechaDeJuego)
}
//XMEN
botonXMEN.onclick = () => {
    almacenarInfo("vecesJugadasXMEN")
    botonesCat(botonXMEN, botonUCM, botonTODO, contPregsUCM, contPregsTODO, botonTerminar)
    recorrerInicial(arrContPregs, 1, preguntasXMEN)
    jugar(preguntasXMEN)
    localStorage.getItem("vecesJugadasXMEN");
    localStorage.setItem("ultVezJugadaXMEN", mnsFechaDeJuego)

}
//TODI
botonTODO.onclick = () => {
    almacenarInfo("vecesJugadasTODO")
    botonesCat(botonTODO, botonUCM, botonXMEN, contPregsUCM, contPregsXMEN, botonTerminar)
    recorrerInicial(arrContPregs, 2, preguntasTODO)
    jugar(preguntasTODO)
    localStorage.getItem("vecesJugadasTODO");
    localStorage.setItem("ultVezJugadaTODO", mnsFechaDeJuego)

}
//RANKING
botonRanking.onclick = () => {
    botonRanking.classList.add("fadeOut")
    fadeOutRemove(divRankingP)
    for (let i = 0; i < rankingP.length; i++) {

        function ranking(vecesJugadas, poscion, boton, ultVezJugada) {
            if (localStorage.getItem(vecesJugadas) === null) {
                rankingP[poscion].innerText = (`Aun no has jugado a ${boton}`)
            } else if (localStorage.getItem(vecesJugadas) == 1) {
                rankingP[poscion].innerText = (`Has jugado a ${boton} ${localStorage.getItem(vecesJugadas)} vez`)
            }
            else {
                rankingP[poscion].innerText = (`Has jugado a ${boton} ${localStorage.getItem(vecesJugadas)} veces. ${localStorage.getItem(ultVezJugada)}`)
            }
        }
        ranking("vecesJugadasUCM", 0, botonUCM.innerText, "ultVezJugadaUCM")
        ranking("vecesJugadasXMEN", 1, botonXMEN.innerText, "ultVezJugadaXMEN")
        ranking("vecesJugadasTODO", 2, botonTODO.innerText, "ultVezJugadaTODO")
    }
}
//Funcion para automatizar 
function recorrerInicial(arrGeneral, n, arrPregunta) {
    arrGeneral[n].classList.remove("fadeOut")
    fadeOutRemove(arrPregunta)

}
function contarPuntos() {
    for (let i = 0; i < opcionesIncorrectas.length; i++) {
        opcionesIncorrectas[i].addEventListener("click", function () {
            contadorDesacertadas++
            limiteOpciones++
            opcionesIncorrectas.disabled = true
            opcionesCorrectas.disabled = true
            opcionesIncorrectas[i].classList.add("opcionSeleccionada")
        })

    }
    for (let x = 0; x < opcionesCorrectas.length; x++) {
        opcionesCorrectas[x].addEventListener("click", function () {
            contadorAcertadas++
            limiteOpciones++
            opcionesCorrectas.disabled = true
            opcionesIncorrectas.disabled = true
            opcionesCorrectas[x].classList.add("opcionSeleccionada")
        })
    }

}
function jugar(arr) {
    for (let i = 0; i < arr.length; i++) {
        preguntasTotales++
    }

    contarPuntos()
}
botonTerminar.onclick = () => {
    // this.style.disabled = true

    botonTerminar.classList.add("fadeOut")
    //Muestro el puntaje
    alertScore()
    //Reinicio los contadores
    contadorAcertadas = 0
    contadorDesacertadas = 0
    preguntasTotales = 0
    botonJugarDeNuevo.classList.remove("fadeOut")

}
botonJugarDeNuevo.onclick = () => {
    //location.reload()
    botonJugarDeNuevo.setAttribute("href", "#header")
    console.log(localStorage.getItem("vecesJugadasUCM"));
}




function alertScore() {
    score.classList.remove("fadeOut")
    //Estos son cuentas para calcular el porcentaje de respuestas correctas e incorrectas. No hay problemas con esta funcion. Se ejecuta en jugarDeNuevo
    contadorAcertadas < preguntasTotales * 10 / 100 
    ? 
    score.innerText = (`Has acertado ${contadorAcertadas}, de ${preguntasTotales}. Creo que vos no viste ni una pelicula. 🥴`)  :
     contadorAcertadas < preguntasTotales * 30 / 100 
     ?
    score.innerText = (`Has acertado ${contadorAcertadas}, de ${preguntasTotales}.`) :
    contadorAcertadas < preguntasTotales * 60 / 100 
    ? 
    score.innerText = (`Has acertado ${contadorAcertadas}, de ${preguntasTotales}. Bien! Seguro que podes hacerlo mejor 😉`) : 
    contadorAcertadas < preguntasTotales * 100 / 100 
    ? 
    score.innerText = (`Has acertado ${contadorAcertadas}, de ${preguntasTotales}. Bueno, si fuera Fury, te habria considerado! 😁`) :
    contadorAcertadas == preguntasTotales * 100 / 100 ?
    score.innerText = (`Has acertado ${contadorAcertadas}, de ${preguntasTotales}. Sos un expert@! 🥳`) : console.log("");
}


