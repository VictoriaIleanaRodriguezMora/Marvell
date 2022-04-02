let datoUsuario
let contadorAcertadas = 0
let contadorDesacertadas = 0



class Pregunta {
    constructor(pregunta, opciones, datoDelUsuario) {
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.datoDelUsuario = datoDelUsuario;

    }
    mostrarPregunta() {
        this.datoDelUsuario = parseInt(prompt(this.pregunta + this.opciones))
    }
    contadorDePuntos() {
        switch (this.datoDelUsuario) {
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
    alertScore() {
        alert(`Has acertado ${contadorAcertadas}, y desacertado ${contadorDesacertadas}.`)
    }
    jugarDeNuevo() {
        this.alertScore()
        contadorAcertadas = 0
        contadorDesacertadas = 0
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

}

function preguntasUCM() {

    let preguntaUCM1 = new Pregunta("Que raza es aliada de Loki en Avengers? Ingresá el numero correspondiente.",
        "\n1. Chitauri \n 2. Klyntar \n 3. Kronans \n 0. Para salir", datoUsuario)
    preguntaUCM1.mostrarPregunta()
    preguntaUCM1.contadorDePuntos()

    let preguntaUCM2 = new Pregunta("¿Por quien consigue Clint la gema del Alma? \n Ingresá el nro correspondiente.",
        "\n 1. Viuda Negra \n 2. Bruja Escarlata \n 3. Gamora \n 4. Carol Danvers \n 0. Para salir", datoUsuario)
    preguntaUCM2.mostrarPregunta()
    preguntaUCM2.contadorDePuntos()

    preguntaUCM2.jugarDeNuevo()
}


let elijeJuego = parseInt(prompt("Sobre qué tematica queres jugar? Ingresá el nro. \n 1. UCM \n 2. X-men"))

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