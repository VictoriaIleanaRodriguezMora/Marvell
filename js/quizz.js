// let jugarSN = parseInt(prompt("Quieres jugar?. \n 1. SÍ \n 2. No"))
let datoUsuario = parseInt(prompt("¿Por quien consigue Clint la gema del Alma?. \n Ingresá el nro correspondiente. \n 1. Viuda Negra \n 2.Bruja Escarlata \n 3.Gamora \n 4.Carol Danvers \n 0. Para salir"))
let contadorAcertadas = 0
let contadorDesacertadas = 0
let cantidadPreguntas = 2

function switchUser() {
    switch (datoUsuario) {
        case 1:
            contadorAcertadas++
            cantidadPreguntas--
            break;
        case 0:
            alert(`Has acertado ${contadorAcertadas}, y desacertado ${contadorDesacertadas}`)
            break;
        default:
            contadorDesacertadas++
            cantidadPreguntas--
            break;
    }
}

function jugar() {
    while (datoUsuario != 0) {
        datoUsuario = parseInt(prompt("Que raza es aliada de Loki en Avengers? \n Ingresá el nro correspondiente. \n 1. Chitauri \n 2. Klyntar \n 3. Kronans \n 0. Para salir"))
        switchUser()
        datoUsuario = parseInt(prompt("¿Qué personas tiene un premio por intrepretar en live action más veces a un superhéroe de marvel? \n 1. Hugh JackMan & Patrick Stewart \n 2. Hugh JackMan & Robert D. Junior\n 3. Patrick Stewart & Robert D. Junior \n 0. Para salir"))
        switchUser()


        alert(`Has acertado ${contadorAcertadas}, y desacertado ${contadorDesacertadas}.`)
        break
    }
}
jugar()