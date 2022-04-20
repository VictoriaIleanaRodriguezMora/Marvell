
let titulo = document.querySelector("#titulo")
let botonJugas = document.querySelector("#jugas")
let botonJugarDeNuevo = document.querySelector(".jugarDeNuevo")
let score = document.querySelector("#score")
let botonTerminar = document.querySelector(".terminar")
let arrDisplayNone = [botonJugarDeNuevo, score, botonTerminar]
//Variables contenedoras
let contenedorDeTodo = document.querySelector(".contenedor__preguntas__general")
let divCategoriasDeJuego = document.querySelectorAll(".categorias__boton")
let divPregunta = document.querySelector(".div__pregunta")

//Opciones
let opcionesUCM = document.querySelectorAll(".ucm > .pregunta__opcion")
let pregunta = document.querySelector(".pregunta__titulo")
//Botones de juego
let botonesCategoriasDeJuego = document.querySelectorAll(".categorias > button")
let botonUCM = document.querySelector("#botonUCM")
let botonXMEN = document.querySelector("#botonXMEN")
let botonTODO = document.querySelector("#botonTODO")

//Contadores
let preguntasTotales = 0;
let contadorAcertadas = 0;
let contadorDesacertadas = 0;
let limiteOpciones = 0;
let vecesJugadasUCM = 0
let vecesJugadasXMEN = 0;
let vecesJugadasTODO = 0;
let vecesJugadasUCMLS;

//
let preguntasDesordenadas = 0
let posicionPregs = 0

// Terminan las variables
function displayNone(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].classList.add("displayNone")
    }
}
function removeDisplayNone(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].classList.remove("displayNone")
    }
}
displayNone(arrDisplayNone)
displayNone(divCategoriasDeJuego)
displayNone(divPregunta)
divPregunta.classList.add("displayNone")



botonJugas.onclick = () => {
    botonJugas.classList.add("displayNone")
    titulo.classList.add("displayNone")
    removeDisplayNone(divCategoriasDeJuego)
    console.log(preguntasUCM);

}

botonUCM.onclick = () => {
    removeDisplayNone(divPregunta)
    botonUCM.style.disabled = "true"
    botonXMEN.classList.add("displayNone")
    botonTODO.classList.add("displayNone")
    botonUCM.classList.remove("categorias__boton")
    botonUCM.classList.add("btnSelected")
    desordenarPreguntas(preguntasUCM)
    mostrarPregunta()
}
function desordenarPreguntas(array) {
    preguntasDesordenadas = array.sort(() => Math.random() - 0.5)
    console.log(preguntasDesordenadas);
}
function mostrarPregunta() {
    rellenarPregunta(preguntasDesordenadas[posicionPregs])
}
function rellenarPregunta(arr) {
    pregunta.innerText = arr["pregunta"]
    for (let i = 0; i < arr["respuestas"][0]["respuesta"].length; i++) {
        let btn = document.createElement("button")
        divPregunta.appendChild(btn)
        btn.classList.add("pregunta__opcion")
        btn.innerText = [i]["respuesta"]
    }
}
const preguntasUCM =
    [{
        pregunta: "¿Por quien consigue Clint la gema del Alma?",
        respuestas: [
            { respuesta: "Bruja Escarlata", correcto: false },
            { respuesta: "Gamora", correcto: false },
            { respuesta: "Viuda Negra", correcto: true },
            { respuesta: "Carol Danvers", correcto: false }
        ]
    },
    {
        pregunta: "¿Que raza es aliada de Loki en Avengers??",
        respuestas: [
            { respuesta: "Chitauri", correcto: false },
            { respuesta: "Klyntar", correcto: false },
            { respuesta: "Kronans", correcto: true },
            { respuesta: "Centaurians", correcto: false }
        ]
    }

    ]




//Oculto lo que necesito para empezar
// function fadeOut(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i].classList.toggle("fadeOut")
//     }
// }
// function fadeOutRemove(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i].classList.remove("fadeOut")
//     }
// }
// fadeOut(divCategoriasDeJuego)
// fadeOut(arrContPregs)
// fadeOut(preguntasUCM)
// fadeOut(preguntasXMEN)
// fadeOut(preguntasTODO)
// botonJugarDeNuevo.classList.add("fadeOut")
// score.classList.add("fadeOut")
// fadeOut(score)
// botonTerminar.classList.add("fadeOut")
// contenedorDeTodo.classList.remove("contenedor__preguntas__general")
// // Empieza el juego
// // Se clickea el boton ¿JUGAS?
// botonJugas.addEventListener("click", fadeOutInicial)
// function fadeOutInicial() {
//     //Se oculta ese boton, y la presentacion del Inicio
//     botonJugas.classList.toggle("fadeOut")
//     titulo.classList.toggle("fadeOut")
//     // Se muestran las categorias para jugar
//     for (let i = 0; i < divCategoriasDeJuego.length; i++) {
//         //Mostrar categorias y elegir juego
//         divCategoriasDeJuego[i].classList.toggle("fadeOut")
//     }

// }
// //Funciones para automatizar comportamientos iguales en todos los botones
// function botonesCat(botonPrincipal, segundoBoton, tercerBoton, contenedorUno, contenedorDos, botonFinish) {
//     contenedorDeTodo.classList.add("contenedor__preguntas__general")
//     botonPrincipal.classList.remove("categorias__boton")
//     botonPrincipal.classList.add("buttonSelected")
//     botonPrincipal.disabled = true
//     segundoBoton.classList.add('fadeOut');
//     tercerBoton.classList.add('fadeOut');
//     botonFinish.classList.remove("fadeOut")
//     contenedorUno.classList.remove("contenedores")
//     contenedorDos.classList.remove("contenedores")
// }
// //Esta funcion, muestra la categoria elegida. Y solo esa.
// function recorrerInicial(arrGeneral, n, arrPregunta) {
//     arrGeneral[n].classList.remove("fadeOut")
//     fadeOutRemove(arrPregunta)
// }
// //Elegir Juego

// botonUCM.onclick = () => {
//     botonesCat(botonUCM, botonXMEN, botonTODO, contPregsXMEN, contPregsTODO, botonTerminar)
//     recorrerInicial(arrContPregs, 0, preguntasUCM, 0)
//     jugar(preguntasUCM)
//     vecesJugadasUCMLS = localStorage.setItem("vecesJugadasUCM", vecesJugadasUCM++);
// }
// botonXMEN.onclick = () => {
//     botonesCat(botonXMEN, botonUCM, botonTODO, contPregsUCM, contPregsTODO, botonTerminar)
//     recorrerInicial(arrContPregs, 1, preguntasXMEN)
//     jugar(preguntasXMEN)

// }
// botonTODO.onclick = () => {
//     botonesCat(botonTODO, botonUCM, botonXMEN, contPregsUCM, contPregsXMEN, botonTerminar)
//     recorrerInicial(arrContPregs, 2, preguntasTODO)
//     jugar(preguntasTODO)

// }
// //Funcion para automatizar 
// function recorrerInicial(arrGeneral, n, arrPregunta) {
//     arrGeneral[n].classList.remove("fadeOut")
//     fadeOutRemove(arrPregunta)
// }
// function contarPuntos() {
//     for (let i = 0; i < opcionesIncorrectas.length; i++) {
//         opcionesIncorrectas[i].addEventListener("click", function () {
//             contadorDesacertadas++
//             limiteOpciones++
//             opcionesIncorrectas.disabled = true
//             opcionesCorrectas.disabled = true
//             opcionesIncorrectas[i].classList.add("opcionSeleccionada")
//         })

//     }
//     for (let x = 0; x < opcionesCorrectas.length; x++) {
//         opcionesCorrectas[x].addEventListener("click", function () {
//             contadorAcertadas++
//             limiteOpciones++
//             opcionesCorrectas.disabled = true
//             opcionesIncorrectas.disabled = true
//             opcionesCorrectas[x].classList.add("opcionSeleccionada")
//         })
//     }

// }
// function jugar(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         preguntasTotales++
//     }

//     contarPuntos()
// }
// botonTerminar.onclick = () => {
//     botonTerminar.classList.add("fadeOut")
//     //Muestro el puntaje
//     alertScore()
//     //Reinicio los contador
//     contadorAcertadas = 0
//     contadorDesacertadas = 0
//     preguntasTotales = 0
//     botonJugarDeNuevo.classList.remove("fadeOut")
// }


// function alertScore() {
//     score.classList.remove("fadeOut")
//     //Estos son cuentas para calcular el porcentaje de respuestas correctas e incorrectas. No hay problemas con esta funcion. Se ejecuta en jugarDeNuevo
//     if (contadorAcertadas < preguntasTotales * 10 / 100) {
//         score.innerText = (`Has acertado ${contadorAcertadas}, de ${preguntasTotales}. Creo que vos no viste ni una pelicula. 🥴`)
//     } else if (contadorAcertadas < preguntasTotales * 30 / 100) {
//         score.innerText = (`Has acertado ${contadorAcertadas}, de ${preguntasTotales}. Bueno, nadie es perfecto... 😵`)
//     } else if (contadorAcertadas < preguntasTotales * 60 / 100) {
//         score.innerText = (`Has acertado ${contadorAcertadas}, de ${preguntasTotales}. Bien! Seguro que podes hacerlo mejor 😉`)
//     } else if (contadorAcertadas < preguntasTotales * 100 / 100) {
//         score.innerText = (`Has acertado ${contadorAcertadas}, de ${preguntasTotales}. Bueno, si fuera Fury, te habria considerado! 😁`)
//     } else if (contadorAcertadas == preguntasTotales * 100 / 100) {
//         score.innerText = (`Has acertado ${contadorAcertadas}, de ${preguntasTotales}. Sos un expert@! 🥳`)
//     }
// }

