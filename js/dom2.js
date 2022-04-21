
let titulo = document.querySelector("#titulo")
let botonJugas = document.querySelector("#jugas")
let botonJugarDeNuevo = document.querySelector(".jugarDeNuevo")
let score = document.querySelector("#score")
let btnSiguiente = document.querySelector(".terminar")
let arrDisplayNone = [botonJugarDeNuevo, score, btnSiguiente]
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

let arrBtn = []
let btn
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

// Configuraciones iniciales
displayNone(arrDisplayNone)
displayNone(divCategoriasDeJuego)
displayNone(btnSiguiente)
divPregunta.classList.add("displayNone")

//
botonJugas.onclick = () => {
    botonJugas.classList.add("displayNone")
    titulo.classList.add("displayNone")
    removeDisplayNone(divCategoriasDeJuego)
}

botonUCM.onclick = () => {
    removeDisplayNone(divPregunta)
    botonUCM.style.disabled = "true"
    botonXMEN.classList.add("displayNone")
    botonTODO.classList.add("displayNone")
    botonUCM.classList.remove("categorias__boton")
    botonUCM.classList.add("btnSelected")
    desordenarPreguntas(preguntasUCM)
    rellenarPregunta(preguntasDesordenadas[posicionPregs])
}
function desordenarPreguntas(array) {
    preguntasDesordenadas = array.sort(() => Math.random() - 0.5)
}
function rellenarPregunta(arr) {
    pregunta.innerText = arr["pregunta"]
    for (let i = 0; i < arr["respuestas"].length; i++) {
        btn = document.createElement("button")
        divPregunta.appendChild(btn)
        btn.classList.add("pregunta__opcion")
        btn.innerText = arr["respuestas"][i]["rta"]
        arrBtn.push(arr["respuestas"][i]["rta"])
        btn.addEventListener("click", function () {
            if (arr["respuestas"][i]["correcto"] == true) {
                contadorAcertadas++
                console.log(contadorAcertadas + "a");
                btn.style.disabled = "true"
                siguientePreg()
            } else {
                contadorDesacertadas++
                console.log(contadorDesacertadas + "des");
                btn.style.disabled = "true"
                siguientePreg()
            }
        })
    }
}
function siguientePreg() {
    btnSiguiente.classList.remove("displayNone")
    btnSiguiente.addEventListener("click", btnSig)
}

function btnSig() {
    btnSiguiente.classList.add("displayNone")
    btn.innerText = ""
    posicionPregs++
    rellenarPregunta(preguntasDesordenadas[posicionPregs])
    while (divPregunta.firstChild) {
        divPregunta.removeChild(divPregunta.firstChild)
    }
}
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

const preguntasUCM =
    [{
        pregunta: "¿Por quien consigue Clint la gema del Alma?",
        respuestas: [
            { rta: "Bruja Escarlata", correcto: false },
            { rta: "Gamora", correcto: false },
            { rta: "Viuda Negra", correcto: true },
            { rta: "Carol Danvers", correcto: false }
        ]
    },
    {
        pregunta: "¿Que raza es aliada de Loki en Avengers??",
        respuestas: [
            { rta: "Chitauri", correcto: true },
            { rta: "Klyntar", correcto: false },
            { rta: "Kronans", correcto: false },
            { rta: "Centaurians", correcto: false }
        ]
    }

    ]

const preguntasXMEN =
    [{
        pregunta: "¿Por quien consigue Clint la gema del Alma?",
        respuestas: [
            { rta: "Bruja Escarlata", correcto: false },
            { rta: "Gamora", correcto: false },
            { rta: "Viuda Negra", correcto: true },
            { rta: "Carol Danvers", correcto: false }
        ]
    },
    {
        pregunta: "¿Que raza es aliada de Loki en Avengers??",
        respuestas: [
            { rta: "Chitauri", correcto: false },
            { rta: "Klyntar", correcto: false },
            { rta: "Kronans", correcto: true },
            { rta: "Centaurians", correcto: false }
        ]
    }

    ]
