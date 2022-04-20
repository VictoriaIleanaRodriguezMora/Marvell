
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
}
function mostrarPregunta() {
    rellenarPregunta(preguntasDesordenadas[posicionPregs])
}
function rellenarPregunta(arr) {
    pregunta.innerText = arr["pregunta"]
    for (let i = 0; i < arr["respuestas"].length; i++) {
        let btn = document.createElement("button")
        divPregunta.appendChild(btn)
        console.log(i);
        btn.classList.add("pregunta__opcion")
        btn.innerText = [i]["respuesta"]
        console.log(btn);
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
