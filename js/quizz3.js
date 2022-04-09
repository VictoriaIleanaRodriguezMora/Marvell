let datoUsuario = parseInt
let contadorAcertadas = 0
let contadorDesacertadas = 0
let preguntasTotales = 0
let arrPreguntasUCM = []
let arrPreguntasXMEN = []
let arrPreguntasTodo = []
let nroRandom;

function alertScore() {
    if (contadorAcertadas < preguntasTotales * 10 / 100) {
        alert(`Has acertado ${contadorAcertadas}, y desacertado ${contadorDesacertadas}.\nCreo que vos no sabes lo que es Marvel.`)
    } else if (contadorAcertadas < preguntasTotales * 30 / 100) {
        alert(`Has acertado ${contadorAcertadas}, y desacertado ${contadorDesacertadas}.\nBueno, nadie es perfecto...`)
    } else if (contadorAcertadas < preguntasTotales * 60 / 100) {
        alert(`Has acertado ${contadorAcertadas}, y desacertado ${contadorDesacertadas}.\nBien! Seguro que podes hacerlo mejor`)
    } else if (contadorAcertadas < preguntasTotales * 100 / 100) {
        alert(`Has acertado ${contadorAcertadas}, y desacertado ${contadorDesacertadas}.\nBueno, si fuera Fury, te habria considerado.`)
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
            console.log("break");
            break;
    }
}

function contadorDePuntos(arr) {
    preguntasTotales++

    if (datoUsuario > 0 && datoUsuario <= 4 && datoUsuario != 1) {
        contadorDesacertadas++
    } else if (datoUsuario == 1) {
        contadorAcertadas++
    } else if (datoUsuario == 0) {
        console.log("break");
    } else {
        alert("Empezaras de nuevo, debes ingresar una opcion válida.")
        contadorAcertadas = 0
        contadorDesacertadas = 0
        preguntasTotales = 0
        showQuestion(arr);
    }

}


function showQuestion(arr) {
    for (let i = 0; i < arr.length; i++) {
        nroRandom = Math.floor(Math.random() * (arr.length))
        datoUsuario = parseInt(prompt(`${arr[nroRandom].pregunta} \n ${arr[nroRandom].opciones}`))
        contadorDePuntos(arr);
    }
    jugarDeNuevo();
}
arrPreguntasUCM = [{
        pregunta: "¿Que raza es aliada de Loki en Avengers? Ingresá el numero correspondiente.",
        opciones: [" 1. Chitauri", " 2. Klyntar", " 3. Kronans", " 0. Para salir "]
    },
    {
        pregunta: "¿Por quien consigue Clint la gema del Alma? Ingresá el numero correspondiente.",
        opciones: [" 1. Viuda Negra", " 2. Bruja Escarlata", " 3. Gamora", " 4. Carol Danvers", " 0. Para salir "],
    },
    {
        pregunta: "¿Que Avenger crea a Vision? Ingresá el numero correspondiente.",
        opciones: [" 1. Iron Man", " 2. Thor", " 3. Bruja Escarlata", " 4. Clint", " 0. Para salir "],
    }

]

function preguntasUCMF() {
    showQuestion(arrPreguntasUCM)
}

arrPreguntasXMEN = [{
        pregunta: "¿Qué personas tiene un premio por intrepretar en live action más veces a un superhéroe de marvel?",
        opciones: [" 1. Hugh JackMan & Patrick Stewart", " 2. Hugh JackMan & Robert D. Junior", " 3. Patrick Stewart & Robert D. Junior", " 0. Para salir "]
    },
    {
        pregunta: "¿En que pelicula Wolverine viaja al pasado? Ingresá el numero correspondiente.",
        opciones: [" 1. X-men Dias del Futuro Pasado", " 2. X-men 0rigenes", " 3. X-men 2", " 0. Para salir "],
    },
    {
        pregunta: "¿Como se llama la nave de los X-men?",
        opciones: [" 1. X-jet", " 2. X-ship", " 3. X-moon", " 0. Para salir "],
    },
    {
        pregunta: "¿Que accidente tiene Charles Xavier que lo deja invalido?",
        opciones: [" 1. Dsiparo en la espina dorsal", " 2. Accidente de auto", " 3. Golpe en la cabeza", " 0. Para salir "]
    },
    {
        pregunta: "¿En donde ocurre 'La Batalla Final' donde Logan tiene que matar a Phoenix?",
        opciones: [" 1. Alcatraz", " 2. Genosha", " 3. Canada", " 0. Para salir "],
    },
    {
        pregunta: "¿Donde nació Lobezno?",
        opciones: [" 1. Canada", " 2. EEUU", " 3. Inglaterra", " 0. Para salir "],
    },
    {
        pregunta: "¿Cual es el verdadero nombre de Logan?",
        opciones: [" 1. Shimmy", " 2. James", " 3. David", " 0. Para salir "],
    }

]

function preguntasXMENF() {
    showQuestion(arrPreguntasXMEN)

}
arrPreguntasTodo = [{
        pregunta: "¿Qué personas tiene un premio por intrepretar en live action más veces a un superhéroe de marvel?",
        opciones: [" 1. Hugh JackMan & Patrick Stewart", " 2. Hugh JackMan & Robert D. Junior", " 3. Patrick Stewart & Robert D. Junior", " 0. Para salir "]
    },
    {
        pregunta: "¿En que pelicula Wolverine viaja al pasado? Ingresá el numero correspondiente.",
        opciones: [" 1. X-men Dias del Futuro Pasado", " 2. X-men 0rigenes", " 3. X-men 2", " 0. Para salir "],
    },
    {
        pregunta: "¿Como se llama la nave de los X-men?",
        opciones: [" 1. X-jet", " 2. X-ship", " 3. X-moon", " 0. Para salir "],
    },
    {
        pregunta: "¿Que accidente tiene Charles Xavier que lo deja invalido?",
        opciones: [" 1. Dsiparo en la espina dorsal", " 2. Accidente de auto", " 3. Golpe en la cabeza", " 0. Para salir "]
    },
    {
        pregunta: "¿En donde ocurre 'La Batalla Final' donde Logan tiene que matar a Phoenix?",
        opciones: [" 1. Alcatraz", " 2. Genosha", " 3. Canada", " 0. Para salir "],
    },
    {
        pregunta: "¿Donde nació Lobezno?",
        opciones: [" 1. Canada", " 2. EEUU", " 3. Inglaterra", " 0. Para salir "],
    },
    {
        pregunta: "¿Cual es el verdadero nombre de Logan?",
        opciones: [" 1. Shimmy", " 2. James", " 3. David", " 0. Para salir "],
    },
    {
        pregunta: "¿Que raza es aliada de Loki en Avengers? Ingresá el numero correspondiente.",
        opciones: [" 1. Chitauri", " 2. Klyntar", " 3. Kronans", " 0. Para salir "]
    },
    {
        pregunta: "¿Por quien consigue Clint la gema del Alma? Ingresá el numero correspondiente.",
        opciones: [" 1. Viuda Negra", " 2. Bruja Escarlata", " 3. Gamora", " 4. Carol Danvers", " 0. Para salir "],
    },
    {
        pregunta: "¿Que Avenger crea a Vision? Ingresá el numero correspondiente.",
        opciones: [" 1. Iron Man", " 2. Thor", " 3. Bruja Escarlata", " 4. Clint", " 0. Para salir "],
    }
];

function preguntasTodoF() {
    showQuestion(arrPreguntasTodo)

}
// Inicia el juego 
let elijeJuego = parseInt(prompt("Sobre qué tematica queres jugar? Ingresá el nro. \n 1. UCM \n 2. X-men \n 3. TODO \n 4. Cancelar"))

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
        case 4:
            break;
            break;
            // default:
            //     elijeJuego = parseInt(prompt("Ingresa una opcion. \n 1. UCM \n 2. X-men \n 3. TODO \n 4. Cancelar"))
            //     elegirJuego()
            //     break;
    }
}
// Si no se ejecuta, no inicia el juego
elegirJuego()