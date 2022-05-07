let ucm
let xmen
let todo
fetch("../json/basePregs.json")
    .then((respuesta) => respuesta.json())
    .then((data) => {
        data
        ucm = data[0]
        xmen = data[1]
        todo = data[2]
    })

let titulo = document.querySelector("#titulo")
let botonJugas = document.querySelector("#jugas")
let botonJugarDeNuevo = document.querySelector(".jugarDeNuevo")
let score = document.querySelector("#score")
let btnSiguiente = document.querySelector(".terminar")
//Variables contenedoras
let contenedorDeTodo = document.querySelector(".contenedor__preguntas__general")
let divCategoriasDeJuego = document.querySelectorAll(".categorias__boton")
let divPregunta = document.querySelector(".div__pregunta")
let arrbotonesPregs = document.querySelector(".botonesPregs")
//Ranking
let divRanking = document.querySelector("#ranking")
let botonRanking = document.querySelector(".botonRanking")
let divRankingP = document.querySelector("#ranking__p")
let rankingP = document.querySelectorAll(".ranking__p")
let spanRanking = document.querySelectorAll(".ranking__span")


//Opciones
let pregunta = document.querySelector(".pregunta__titulo")
//Botones de juego
let botonUCM = document.querySelector("#botonUCM")
let botonXMEN = document.querySelector("#botonXMEN")
let botonTODO = document.querySelector("#botonTODO")
//Contadores
let preguntasTotales = 0
let contadorAcertadas = 0
let contadorDesacertadas = 0
let limiteOpciones = 0
let vecesJugadasUCM = 0
let vecesJugadasXMEN = 0
let vecesJugadasTODO = 0
let vecesJugadasUCMLS

let arrDisplayNone = [botonJugarDeNuevo, score, btnSiguiente, divRankingP]
//
let preguntasDesordenadas = 0
let posicionPregs = 0
let arrBtn = []
let btn
//LUXON
const DateTime = luxon.DateTime
let fechaDeJuego = DateTime.now().toLocaleString()
let hsDeJuego = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE)

//LUXON
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
displayNone(rankingP)
// Configuraciones iniciales
displayNone(arrDisplayNone)
displayNone(divCategoriasDeJuego)
displayNone(btnSiguiente)
divRankingP.classList.add("displayNone")
divPregunta.classList.add("displayNone")

//Inicia juego
botonJugas.onclick = () => {
    botonJugas.classList.add("displayNone")
    titulo.classList.add("displayNone")
    removeDisplayNone(divCategoriasDeJuego)
}
//Almacenar Info en Local Storage
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

//Funcion que se ejecuta en todos los botones de categoria
function botonesCategorias(botonPrincipal, botonSecundario, botonSecundario2, arrPreguntas) {
    botonPrincipal.disabled = true;
    botonPrincipal.classList.remove("categorias__boton")
    botonPrincipal.classList.add("btnSelected")
    botonSecundario.classList.add("displayNone")
    botonSecundario2.classList.add("displayNone")
    divRanking.classList.add("displayNone")
    desordenarPreguntas(arrPreguntas)
    rellenarPregunta(preguntasDesordenadas[posicionPregs])

}
botonUCM.onclick = () => {
    botonUCM.disabled = true;
    almacenarInfo("vecesJugadasUCM")
    botonesCategorias(botonUCM, botonXMEN, botonTODO, ucm)
    localStorage.getItem("vecesJugadasUCM");
    localStorage.setItem("ultVezJugadaUCM", fechaDeJuego)
    localStorage.setItem("hsDeJuegoUCM", hsDeJuego)
}
botonXMEN.onclick = () => {
    botonesCategorias(botonXMEN, botonUCM, botonTODO, xmen)
    localStorage.getItem("vecesJugadasXMEN");
    localStorage.setItem("ultVezJugadaXMEN", fechaDeJuego)
    localStorage.setItem("hsDeJuegoXMEN", hsDeJuego)
}
botonTODO.onclick = () => {
    botonesCategorias(botonTODO, botonUCM, botonXMEN, todo)
    localStorage.getItem("vecesJugadasTODO");
    localStorage.setItem("ultVezJugadaTODO", fechaDeJuego)
    localStorage.setItem("hsDeJuegoTODO", hsDeJuego)
}
//Funcion para mostrar aleatoriamente las pregs
function desordenarPreguntas(array) {
    preguntasDesordenadas = array.sort(() => Math.random() - 0.5)
}
//Funciona que pone el contenido en las preguntas
function rellenarPregunta(arr) {
    if (arr === undefined) {
        terminaElJuego()
    } else {
        divPregunta.classList.remove("displayNone")
        preguntasTotales++
        pregunta.innerText = arr["pregunta"]
        for (let i = 0; i < arr["respuestas"].length; i++) {
            console.log("else")
            btn = document.createElement("button")
            btn.disabled = false
            arrbotonesPregs.appendChild(btn)
            arrBtn.push(arr["respuestas"][i]["rta"])
            btn.classList.add("pregunta__opcion")
            btn.innerText = arr["respuestas"][i]["rta"]
            //Evento al apretar una de las opciones
            btn.addEventListener("click", function () {

                let opCorrecta = arr["respuestas"][i]["correcto"]
                if (opCorrecta == true) {
                    contadorAcertadas++
                    console.log(contadorAcertadas + "a")
                    btn.disabled = true
                    siguientePreg()
                } else {
                    contadorDesacertadas++
                    console.log(contadorDesacertadas + "des")
                    btn.disabled = true
                    siguientePreg()
                }
                btn.disabled = true

            })

        }
    }
}
//Funciones que muestra el boton SIGUIENTE
function siguientePreg() {
    btnSiguiente.classList.remove("displayNone")
}
btnSiguiente.onclick = () => {
    posicionPregs++
    arrBtn = []
    btnSiguiente.classList.add("displayNone")
    while (arrbotonesPregs.firstChild) {
        arrbotonesPregs.removeChild(arrbotonesPregs.firstChild)
    }
    rellenarPregunta(preguntasDesordenadas[posicionPregs])
}

//Encargada de mostrar la alerta de juego finalizado con el puntaje
function terminaElJuego() {
    divPregunta.classList.add("displayNone")
    alertScore()
    botonJugarDeNuevo.classList.remove("displayNone")
}

//BOTON RANKING
botonRanking.onclick = () => {
    botonRanking.classList.add("displayNone")
    divRankingP.classList.remove("displayNone")
    removeDisplayNone(rankingP)
    removeDisplayNone(spanRanking)

    for (let i = 0; i < rankingP.length; i++) {
        function ranking(vecesJugadas, posc, boton, ultVezJugada, hsDeJuego) {
            if (localStorage.getItem(vecesJugadas) === null) {
                rankingP[posc].innerText = (`Aun no has jugado a ${boton}`)
            } else if (localStorage.getItem(vecesJugadas) == 1) {
                rankingP[posc].innerText = (`Has jugado a ${boton} ${localStorage.getItem(vecesJugadas)} vez`)
                spanRanking[posc].innerText = (`Ultima vez el ${localStorage.getItem(ultVezJugada)} a las ${localStorage.getItem(hsDeJuego)}`)

            }
            else {
                rankingP[posc].innerText = (`Has jugado a ${boton} ${localStorage.getItem(vecesJugadas)} veces.`)
                spanRanking[posc].innerText = (`Ultima vez el ${localStorage.getItem(ultVezJugada)} a las ${localStorage.getItem(hsDeJuego)}`)
            }

        }
        ranking("vecesJugadasUCM", 0, botonUCM.innerText, "ultVezJugadaUCM", "hsDeJuegoUCM")
        ranking("vecesJugadasXMEN", 1, botonXMEN.innerText, "ultVezJugadaXMEN", "hsDeJuegoXMEN")
        ranking("vecesJugadasTODO", 2, botonTODO.innerText, "ultVezJugadaTODO", "hsDeJuegoTODO")
    }
}
divRankingP.onclick = () => {
    botonRanking.classList.remove("displayNone")
    divRankingP.classList.add("displayNone")
}
function alertScore() {
    score.classList.remove("displayNone")
    //Estos son cuentas para calcular el porcentaje de respuestas correctas e incorrectas. No hay problemas con esta funcion. Se ejecuta en jugarDeNuevo
    if (contadorAcertadas < (preguntasTotales * 10) / 100) {
        score.innerText = `Has acertado ${contadorAcertadas}, de ${preguntasTotales}. Creo que vos no viste ni una pelicula. 🥴`
    } else if (contadorAcertadas < (preguntasTotales * 30) / 100) {
        score.innerText = `Has acertado ${contadorAcertadas}, de ${preguntasTotales}. Bueno, nadie es perfecto... 😵`
    } else if (contadorAcertadas < (preguntasTotales * 60) / 100) {
        score.innerText = `Has acertado ${contadorAcertadas}, de ${preguntasTotales}. Bien! Seguro que podes hacerlo mejor 😉`
    } else if (contadorAcertadas < (preguntasTotales * 100) / 100) {
        score.innerText = `Has acertado ${contadorAcertadas}, de ${preguntasTotales}. Bueno, si fuera Fury, te habria considerado! 😁`
    } else if (contadorAcertadas == (preguntasTotales * 100) / 100) {
        score.innerText = `Has acertado ${contadorAcertadas}, de ${preguntasTotales}. Sos un expert@! 🥳`
    }
}
