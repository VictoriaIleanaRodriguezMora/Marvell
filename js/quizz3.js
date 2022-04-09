let datoUsuario
let contadorAcertadas = 0
let contadorDesacertadas = 0
let preguntasTotales = 0
let arrPreguntasUCM = []
let arrPreguntasXMEN = []
let arrPreguntasTodo = []

function contadorDePuntos() {
    preguntasTotales++
    if (datoUsuario != 1 && datoUsuario != 0) {
        contadorDesacertadas++
    } else if (datoUsuario == 0) {
        console.log("break");
    } else {
        contadorAcertadas++
    }
}

function alertScore() {
    if (contadorAcertadas < preguntasTotales * 10 / 100) {
        alert(`Has acertado ${contadorAcertadas}, y desacertado ${contadorDesacertadas}.\nCreo que vos no sabes lo que es Marvel.`)
    } else if (contadorAcertadas < preguntasTotales * 30 / 100) {
        alert(`Has acertado ${contadorAcertadas}, y desacertado ${contadorDesacertadas}.\nBueno, nadie es perfecto...`)
    } else if (contadorAcertadas == preguntasTotales * 50 / 100) {
        alert(`Has acertado ${contadorAcertadas}, y desacertado ${contadorDesacertadas}.\nBien! Seguro que podes hacerlo mejor`)
    } else if (contadorAcertadas == preguntasTotales * 100 / 100) {
        alert(`Has acertado ${contadorAcertadas}, y desacertado ${contadorDesacertadas}.\nSos un expert@!`)
    }
}

function jugarDeNuevo() {
    alertScore()
    contadorAcertadas = 0
    contadorDesacertadas = 0
    preguntasTotales = 0
    elijeJuego = parseInt(prompt("Queres jugar de nuevo? \n 1. Sí \n 2. No "))
    switch (elijeJuego) {
        case 1:
            elijeJuego = parseInt(prompt("Sobre qué tematica queres jugar? Ingresá el nro. \n 1. UCM \n 2. X-men \n 3. TODO"))
            elegirJuego()
            break;
        case 2:
            break;
    }
}

// function mostrarPreguntaRandom(array) {
//     for (let i = 0; i < array.length; i++) {
//         datoUsuario = parseInt(prompt(`${array[i].pregunta} \n ${array[i].opciones}`))
//     }

// }

function showQuestion(arr) {
    for (let i = 0; i < arr.length; i++) {
        datoUsuario = parseInt(prompt(`${arr[i].pregunta} \n ${arr[i].opciones}`))
        contadorDePuntos()
    }
    jugarDeNuevo();
}
arrPreguntasUCM = [{
        pregunta: "¿Que raza es aliada de Loki en Avengers? Ingresá el numero correspondiente.",
        opciones: ["1. Chitauri", "2. Klyntar", "3. Kronans", "0. Para salir "]
    },
    {
        pregunta: "¿Por quien consigue Clint la gema del Alma? Ingresá el numero correspondiente.",
        opciones: ["1. Viuda Negra", "2. Bruja Escarlata", "3. Gamora", "4. Carol Danvers", "0. Para salir "],
    },
    {
        pregunta: "¿Que Avenger crea a Vision? Ingresá el numero correspondiente.",
        opciones: ["1. Iron Man", "2. Thor", "3. Bruja Escarlata", "4. Clint", "0. Para salir "],
    }

]

function preguntasUCMF() {
    showQuestion(arrPreguntasUCM)
}

// arrPreguntasXMEN = [
//     new Pregunta("¿Qué personas tiene un premio por intrepretar en live action más veces a un superhéroe de marvel? \n Ingresá el numero correspondiente.", "\n 1. Hugh JackMan & Patrick Stewart \n 2. Hugh JackMan & Robert D. Junior\n 3. Patrick Stewart & Robert D. Junior \n 0. Para salir", datoUsuario),
//     new Pregunta("¿En que pelicula Wolverine viaja al pasado? \n Ingresá el nro correspondiente.",
//         "\n 1. X-men Dias del Futuro Pasado \n 2. X-men 0rigenes \n 3. X-men 2 \n 0. Para salir", datoUsuario),
//     new Pregunta("¿Como se llama la nave de los X-men? \n Ingresá el nro correspondiente.",
//         "\n 1. X-jet \n 2. X-ship \n 3. X-moon", datoUsuario),
//     new Pregunta("¿Que accidente tiene Charles Xavier que lo deja invalido? \n Ingresá el nro correspondiente.", "\n 1. Tiro en la espina dorsal \n 2. Accidente de auto \n 3. Golpe en la cabeza", datoUsuario),
//     new Pregunta("¿En donde ocurre 'La Batalla Final' donde Logan tiene que matar a Phoenix? \n Ingresá el nro correspondiente.", "\n 1. Alcatraz \n 2. Genosha \n 3. Canada", datoUsuario),
//     new Pregunta("¿Donde nació Lobezno? \n Ingresá el nro correspondiente.", "\n 1. Canada \n 2. EEUU \n 3. Inglaterra", datoUsuario),
//     new Pregunta("¿Cual es el verdadero nombre de Logan? \n Ingresá el nro correspondiente.",
//         "\n 1. Shimmy \n 2. James \n 3. David", datoUsuario)

// ]

// function preguntasXMENF() {
//     showQuestion(arrPreguntasXMEN)

// }
// arrPreguntasTodo = [
//     new Pregunta("Que raza es aliada de Loki en Avengers? Ingresá el numero correspondiente.", "\n1. Chitauri \n 2. Klyntar \n 3. Kronans \n 0. Para salir", datoUsuario),
//     new Pregunta("¿Por quien consigue Clint la gema del Alma? \n Ingresá el nro correspondiente.",
//         "\n 1. Viuda Negra \n 2. Bruja Escarlata \n 3. Gamora \n 4. Carol Danvers \n 0. Para salir", datoUsuario),
//     new Pregunta("¿Que Avenger crea a Vision? \n Ingresá el nro correspondiente.",
//         "\n 1. Iron Man \n 2. Thor \n 3. Bruja Escarlata \n 4. Clint \n 0. Para salir", datoUsuario),
//     new Pregunta("¿Qué personas tiene un premio por intrepretar en live action más veces a un superhéroe de marvel? \n Ingresá el numero correspondiente.", "\n 1. Hugh JackMan & Patrick Stewart \n 2. Hugh JackMan & Robert D. Junior\n 3. Patrick Stewart & Robert D. Junior \n 0. Para salir", datoUsuario),
//     new Pregunta("¿En que pelicula Wolverine viaja al pasado? \n Ingresá el nro correspondiente.",
//         "\n 1. X-men Dias del Futuro Pasado \n 2. X-men 0rigenes \n 3. X-men 2 \n 0. Para salir", datoUsuario),
//     new Pregunta("¿Como se llama la nave de los X-men? \n Ingresá el nro correspondiente.",
//         "\n 1. X-jet \n 2. X-ship \n 3. X-moon", datoUsuario),
//     new Pregunta("¿Que accidente tiene Charles Xavier que lo deja invalido? \n Ingresá el nro correspondiente.", "\n 1. Tiro en la espina dorsal \n 2. Accidente de auto \n 3. Golpe en la cabeza", datoUsuario),
//     new Pregunta("¿En donde ocurre 'La Batalla Final' donde Logan tiene que matar a Phoenix? \n Ingresá el nro correspondiente.", "\n 1. Alcatraz \n 2. Genosha \n 3. Canada", datoUsuario),
//     new Pregunta("¿Donde nació Lobezno? \n Ingresá el nro correspondiente.", "\n 1. Canada \n 2. EEUU \n 3. Inglaterra", datoUsuario),
//     new Pregunta("¿Cual es el verdadero nombre de Logan? \n Ingresá el nro correspondiente.",
//         "\n 1. Shimmy \n 2. James \n 3. David", datoUsuario)
// ];

// function preguntasTodoF() {
//     showQuestion(arrPreguntasTodo)

// }
// Inicia el juego 
let elijeJuego = parseInt(prompt("Sobre qué tematica queres jugar? Ingresá el nro. \n 1. UCM \n 2. X-men \n 3. TODO"))

function elegirJuego() {
    switch (elijeJuego) {
        case 1:
            preguntasUCMF()
            break;
        case 2:
            preguntasXMENF()
            break;
        case 3:
            preguntasTodoF()
            break;
        default:
            break;
    }
}
// Si no se ejecuta, no inicia el juego
elegirJuego()