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
let arrbotonesPregs = document.querySelector(".botonesPregs")
let divPregunta = document.querySelector(".div__pregunta")
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
let btnArr = []
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
function displayNoneElement(element) {
    element.classList.add("displayNone")
}
function removeDisplayNone(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].classList.remove("displayNone")
    }
}
function removeDisplayNoneElement(element) {
    element.classList.remove("displayNone")
}
displayNone(rankingP)
// Configuraciones iniciales
displayNone(arrDisplayNone)
displayNone(divCategoriasDeJuego)
displayNone(btnSiguiente)
displayNoneElement(divRankingP)
displayNoneElement(divPregunta)


//Inicia juego
botonJugas.onclick = () => {
    displayNoneElement(botonJugas)
    displayNoneElement(titulo)
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
    displayNoneElement(botonSecundario)
    displayNoneElement(botonSecundario2)
    displayNoneElement(divPregunta)
    displayNoneElement(divRanking)
    desordenarPreguntas(arrPreguntas)
    rellenarPregunta(preguntasDesordenadas[posicionPregs])

}
botonUCM.onclick = () => {
    botonUCM.disabled = true;
    botonesCategorias(botonUCM, botonXMEN, botonTODO, ucm)
    almacenarInfo("vecesJugadasUCM")
    localStorage.getItem("vecesJugadasUCM");
    localStorage.setItem("ultVezJugadaUCM", fechaDeJuego)
    localStorage.setItem("hsDeJuegoUCM", hsDeJuego)
}
botonXMEN.onclick = () => {
    botonesCategorias(botonXMEN, botonUCM, botonTODO, xmen)
    almacenarInfo("vecesJugadasXMEN")
    localStorage.getItem("vecesJugadasXMEN");
    localStorage.setItem("ultVezJugadaXMEN", fechaDeJuego)
    localStorage.setItem("hsDeJuegoXMEN", hsDeJuego)
}
botonTODO.onclick = () => {
    botonesCategorias(botonTODO, botonUCM, botonXMEN, todo)
    almacenarInfo("vecesJugadasTODO")
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
            btn = document.createElement("button")
            btnArr.push(btn)
            arrbotonesPregs.appendChild(btn)
            btn.disabled = false
            arrBtn.push(arr["respuestas"][i]["rta"])
            btn.classList.add("pregunta__opcion")
            btn.innerText = arr["respuestas"][i]["rta"]
            //Evento al apretar una de las opciones
            btn.addEventListener("click", function () {
                let opcionAEvaluar = arr["respuestas"][i]["correcto"]
                if (opcionAEvaluar == true) {
                    contadorAcertadas++
                    this.classList.add("opcionCorrecta")
                    this.classList.remove("pregunta__opcion")
                    siguientePreg()
                } else {
                    contadorDesacertadas++
                    this.classList.add("opcionIncorrecta")
                    this.classList.remove("pregunta__opcion")
                    siguientePreg()
                }
                deshabilitarBtn(btnArr)
            })

        }
    }
}

function deshabilitarBtn(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].disabled = true
    }
}
//Funciones que muestra el boton SIGUIENTE
function siguientePreg() {
    removeDisplayNoneElement(btnSiguiente)
}
btnSiguiente.onclick = () => {
    posicionPregs++
    arrBtn = []
    btnArr = []
    displayNoneElement(btnSiguiente)
    while (arrbotonesPregs.firstChild) {
        //remueve los botones
        arrbotonesPregs.removeChild(arrbotonesPregs.firstChild)
    }
    rellenarPregunta(preguntasDesordenadas[posicionPregs])
}

//Encargada de mostrar la alerta de juego finalizado con el puntaje
function terminaElJuego() {
    displayNoneElement(divPregunta)
    alertScore()
    removeDisplayNoneElement(botonJugarDeNuevo)
}

//BOTON RANKING
botonRanking.onclick = () => {
    displayNoneElement(botonRanking)
    removeDisplayNoneElement(divRankingP)
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
    displayNoneElement(divRankingP)
    removeDisplayNoneElement(botonRanking)
}
function alertScore() {
    removeDisplayNoneElement(score)
    //Estos son cuentas para calcular el porcentaje de respuestas correctas e incorrectas. No hay problemas con esta funcion. Se ejecuta en jugarDeNuevo
    contadorAcertadas < preguntasTotales * 10 / 100
        ?
        score.innerText = (`Has acertado ${contadorAcertadas}, de ${preguntasTotales}. Creo que vos no viste ni una pelicula. ????`) :
        contadorAcertadas < preguntasTotales * 30 / 100
        ?
        score.innerText = (`Has acertado ${contadorAcertadas}, de ${preguntasTotales}. Bueno, nadie es perfecto. ????`) :
        contadorAcertadas < preguntasTotales * 60 / 100
        ?
        score.innerText = (`Has acertado ${contadorAcertadas}, de ${preguntasTotales}. Bien! Seguro que podes hacerlo mejor. ????`) :
        contadorAcertadas < preguntasTotales * 100 / 100
        ?
        score.innerText = (`Has acertado ${contadorAcertadas}, de ${preguntasTotales}. Bueno, si fuera Fury, te habria considerado! ????`) :
        contadorAcertadas == preguntasTotales * 100 / 100 ?
        score.innerText = (`Has acertado ${contadorAcertadas}, de ${preguntasTotales}. Sos un expert@! ????`) : console.log("");
}


//CODIGO DE BOOSTRAP
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})
