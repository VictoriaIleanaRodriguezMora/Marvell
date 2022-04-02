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

function preguntasXMEN() {
    let preguntaXMEN1 = new Pregunta("¿Qué personas tiene un premio por intrepretar en live action más veces a un superhéroe de marvel? \n Ingresá el numero correspondiente.",
        "\n 1. Hugh JackMan & Patrick Stewart \n 2. Hugh JackMan & Robert D. Junior\n 3. Patrick Stewart & Robert D. Junior \n 0. Para salir", datoUsuario)
    preguntaXMEN1.mostrarPregunta()
    preguntaXMEN1.contadorDePuntos()

    let preguntaXMEN2 = new Pregunta("¿En que pelicula Wolverine viaja al pasado? \n Ingresá el nro correspondiente.",
        "\n 1. X-men Dias del Futuro Pasado \n 2. X-men 0rigenes \n 3. X-men 2 \n 0. Para salir", datoUsuario)
    preguntaXMEN2.mostrarPregunta()
    preguntaXMEN2.contadorDePuntos()

    let preguntaXMEN3 = new Pregunta("¿Como se llama la nave de los X-men? \n Ingresá el nro correspondiente.",
        "\n 1. X-jet \n 2. X-ship \n 3. X-moon", datoUsuario)
    preguntaXMEN3.mostrarPregunta()
    preguntaXMEN3.contadorDePuntos()

    let preguntaXMEN4 = new Pregunta("¿Que accidente tiene Charles Xavier que lo deja invalido? \n Ingresá el nro correspondiente.",
        "\n 1. Tiro en la espina dorsal \n 2. Accidente de auto \n 3. Golpe en la cabeza", datoUsuario)
    preguntaXMEN4.mostrarPregunta()
    preguntaXMEN4.contadorDePuntos()


    let preguntaXMEN5 = new Pregunta("¿En donde ocurre 'La Batalla Final' donde Logan tiene que matar a Phoenix? \n Ingresá el nro correspondiente.",
        "\n 1. Alcatraz \n 2. Genosha \n 3. Canada", datoUsuario)
    preguntaXMEN5.mostrarPregunta()
    preguntaXMEN5.contadorDePuntos()

    let preguntaXMEN6 = new Pregunta("¿Donde nació Lobezno? \n Ingresá el nro correspondiente.",
        "\n 1. Canada \n 2. EEUU \n 3. Inglaterra", datoUsuario)
    preguntaXMEN6.mostrarPregunta()
    preguntaXMEN6.contadorDePuntos()

    let preguntaXMEN7 = new Pregunta("¿Cual es el verdadero nombre de Logan? \n Ingresá el nro correspondiente.",
        "\n 1. Shimmy \n 2. James \n 3. David", datoUsuario)
    preguntaXMEN7.mostrarPregunta()
    preguntaXMEN7.contadorDePuntos()

    preguntaXMEN7.jugarDeNuevo()
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