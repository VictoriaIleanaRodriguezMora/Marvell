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
        default:
            break;
    }
}
elegirJuego()

function jugarDeNuevo() {
    contadorAcertadas = 0
    contadorDesacertadas = 0
    elijeJuego = parseInt(prompt("Queres jugar de nuevo? \n 1. Sí \n 2. No "))
    elijeJuego = parseInt(prompt("Sobre qué tematica queres jugar? Ingresá el nro. \n 1. UCM \n 2. X-men \n 3. TODO"))
    elegirJuego()
}

function alertScore() {
    alert(`Has acertado ${contadorAcertadas}, y desacertado ${contadorDesacertadas}.`)
}

function switchUser() {
    switch (datoUsuario) {
        case 1:
            contadorAcertadas++
            break;
        case 0:
            alert(`Has acertado ${contadorAcertadas}, y desacertado ${contadorDesacertadas}`)
            break;
        default:
            contadorDesacertadas++
            break;
    }
}

function preguntasUCM() {
    datoUsuario = parseInt(prompt("Que raza es aliada de Loki en Avengers? \n Ingresá el nro correspondiente. \n 1. Chitauri \n 2. Klyntar \n 3. Kronans \n 0. Para salir"))
    switchUser()
    datoUsuario = parseInt(prompt("¿Por quien consigue Clint la gema del Alma?. \n Ingresá el nro correspondiente. \n 1. Viuda Negra \n 2. Bruja Escarlata \n 3. Gamora \n 4. Carol Danvers \n 0. Para salir"))
    switchUser()
    alertScore()
    jugarDeNuevo()

}

function preguntasXMEN() {
    datoUsuario = parseInt(prompt("¿Qué personas tiene un premio por intrepretar en live action más veces a un superhéroe de marvel? \n 1. Hugh JackMan & Patrick Stewart \n 2. Hugh JackMan & Robert D. Junior\n 3. Patrick Stewart & Robert D. Junior \n 0. Para salir"))
    switchUser()
    datoUsuario = parseInt(prompt("¿Por quien consigue Clint la gema del Alma?. \n Ingresá el nro correspondiente. \n 1. Viuda Negra \n 2. Bruja Escarlata \n 3. Gamora \n 4. Carol Danvers \n 0. Para salir"))
    switchUser()
    alertScore()
    jugarDeNuevo()
}


// function todo() {
//     preguntasXMEN()
//     preguntasUCM()
// }

// function jugar() {
//     while (datoUsuario != 0) {
//         switchUser()
//         datoUsuario = parseInt(prompt("¿Qué personas tiene un premio por intrepretar en live action más veces a un superhéroe de marvel? \n 1. Hugh JackMan & Patrick Stewart \n 2. Hugh JackMan & Robert D. Junior\n 3. Patrick Stewart & Robert D. Junior \n 0. Para salir"))
//         switchUser()
// alertScore()
//
//     }
// }
// jugar()