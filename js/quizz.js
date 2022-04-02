let datoUsuario
let contadorAcertadas = 0
let contadorDesacertadas = 0

let elijeJuego = parseInt(prompt("Sobre qué tematica queres jugar? Ingresá el nro. \n 1. UCM \n 2. X-men"))
    //elijeJuego inicialmente pude valer 1 || 2
    //Pero despues puede tomar 4 valores 1, 2, 3 y 0

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
            // El caso 0, no me funciona como el caso 2 de jugarDeNuevo(). No se rompe si el usuario ingresa 0.
        default:
            break;
    }
}
// Si no se ejecuta, no inicia el juego
elegirJuego()

// Se ejecuta una vez finalizadas las preguntas. Y reestablece los contadores, para jugar de nuevo.
//Es de callback

function jugarDeNuevo() {
    alertScore()
    contadorAcertadas = 0
    contadorDesacertadas = 0
    elijeJuego = parseInt(prompt("Queres jugar de nuevo? \n 1. Sí \n 2. No "))
    switch (elijeJuego) {
        case 1:
            elijeJuego = parseInt(prompt("Sobre qué tematica queres jugar? Ingresá el nro. \n 1. UCM \n 2. X-men \n 3. TODO"))
            elegirJuego()
            break;
            // si el usuario ingresa 2, acá si se rompe.
        case 2:
            break;
    }
}

// Muestra la puntuacion del usuario
function alertScore() {
    alert(`Has acertado ${contadorAcertadas}, y desacertado ${contadorDesacertadas}.`)
}

// Esta funcion es de callback, por que solo se ejecuta dentro de las funciones de Preguntas.
//Suma los puntos de datoUsuario
function contadorDePuntos() {
    switch (datoUsuario) {
        case 1:
            contadorAcertadas++
            break;
        case 2:
            contadorDesacertadas++
            break;
        case 3:
            contadorDesacertadas++
            break;
        case 4:
            contadorDesacertadas++
            break;
        case 0:
            break;
        default:
            break;
    }
}
// Funcion de callback
function preguntasUCM() {

    datoUsuario = parseInt(prompt("Que raza es aliada de Loki en Avengers? \n Ingresá el nro correspondiente. \n 1. Chitauri \n 2. Klyntar \n 3. Kronans \n 0. Para salir"))
    contadorDePuntos()
    datoUsuario = parseInt(prompt("¿Por quien consigue Clint la gema del Alma? \n Ingresá el nro correspondiente. \n 1. Viuda Negra \n 2. Bruja Escarlata \n 3. Gamora \n 4. Carol Danvers \n 0. Para salir"))
    contadorDePuntos()
    jugarDeNuevo()

}
// Funcion de callback
function preguntasXMEN() {

    datoUsuario = parseInt(prompt("¿Qué personas tiene un premio por intrepretar en live action más veces a un superhéroe de marvel? \n 1. Hugh JackMan & Patrick Stewart \n 2. Hugh JackMan & Robert D. Junior\n 3. Patrick Stewart & Robert D. Junior \n 0. Para salir"))
    contadorDePuntos()
    datoUsuario = parseInt(prompt("¿En que pelicula Wolverine viaja al pasado?. \n Ingresá el numero correspondiente. \n 1. X-men Dias del Futuro Pasado \n 2. X-men 0rigenes \n 3. X-men 2 \n 0. Para salir"))
    contadorDePuntos()
    datoUsuario = parseInt(prompt("¿Como se llama la nave de los X-men? \n Ingresá el numero correspondiente. \n 1. X-jet \n 2. X-ship \n 3. X-moon"))
    contadorDePuntos()
    datoUsuario = parseInt(prompt("¿Que accidente tiene Charles Xavier que lo deja invalido? \n Ingresá el numero correspondiente. \n 1. Tiro en la espina dorsal \n 2. Accidente de auto \n 3. Golpe en la cabeza"))
    contadorDePuntos()
    datoUsuario = parseInt(prompt("¿En donde ocurre 'La Batalla Final' donde Logan tiene que matar a Phoenix? \n Ingresá el numero correspondiente.\n 1. Alcatraz \n 2. Genosha \n 3. Canada "))
    contadorDePuntos()
    datoUsuario = parseInt(prompt("¿Donde nació Lobezno? \n Ingresá el numero correspondiente.\n 1. Canada \n 2. EEUU \n 3. Inglaterra "))
    contadorDePuntos()
    datoUsuario = parseInt(prompt("¿Cual es el verdadero nombre de Logan? \n Ingresá el numero correspondiente.\n 1. Shimmy \n 2. James \n 3. David"))
    contadorDePuntos()
    jugarDeNuevo()
}


// function todo() {
//     preguntasXMEN()
//     preguntasUCM()
// }

// todo()