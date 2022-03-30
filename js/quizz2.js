let elijeJuego = parseInt(prompt("Sobre qué tematica queres jugar? Ingresá el nro. \n 1. UCM \n 2. X-men \n 3. TODO"))
let datoUsuario
let contadorAcertadas = 0
let contadorDesacertadas = 0

function elegirJuego() {
    switch (elijeJuego) {
        case 1:
            preguntasUCM()
            break;
        case 2:
            preguntasXMEN()
            break;
        case 3:
            todo()
            break;
        case 0:
            break;
    }
}
elegirJuego()

function cerrarJuego() {
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

function jugarDeNuevo() {
    alertScore()
    cerrarJuego()
    contadorAcertadas = 0
    contadorDesacertadas = 0
}

function alertScore() {
    alert(`Has acertado ${contadorAcertadas}, y desacertado ${contadorDesacertadas}.`)
}

function contadorDePuntos() {

    switch (datoUsuario) {
        case 1:
            contadorAcertadas++
            break;
        case 0:
            break;
        default:
            contadorDesacertadas++
            break;
    }
}

function preguntasUCM() {

    datoUsuario = parseInt(prompt("Que raza es aliada de Loki en Avengers? \n Ingresá el nro correspondiente. \n 1. Chitauri \n 2. Klyntar \n 3. Kronans \n 0. Para salir"))
    contadorDePuntos()
    datoUsuario = parseInt(prompt("¿Por quien consigue Clint la gema del Alma?. \n Ingresá el nro correspondiente. \n 1. Viuda Negra \n 2. Bruja Escarlata \n 3. Gamora \n 4. Carol Danvers \n 0. Para salir"))
    contadorDePuntos()
    contadorDePuntos()
    jugarDeNuevo()

}

function preguntasXMEN() {

    datoUsuario = parseInt(prompt("¿Qué personas tiene un premio por intrepretar en live action más veces a un superhéroe de marvel? \n 1. Hugh JackMan & Patrick Stewart \n 2. Hugh JackMan & Robert D. Junior\n 3. Patrick Stewart & Robert D. Junior \n 0. Para salir"))
    contadorDePuntos()
    datoUsuario = parseInt(prompt("¿Por quien consigue Clint la gema del Alma?. \n Ingresá el nro correspondiente. \n 1. Viuda Negra \n 2. Bruja Escarlata \n 3. Gamora \n 4. Carol Danvers \n 0. Para salir"))
    contadorDePuntos()
    jugarDeNuevo()
}


// function todo() {
//     preguntasXMEN()
//     preguntasUCM()
// }

// todo()