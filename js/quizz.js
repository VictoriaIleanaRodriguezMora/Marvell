let datoUsuario = parseInt
let contadorAcertadas = 0
let contadorDesacertadas = 0
let preguntasTotales = 0
let arrPreguntasUCM = []
let arrPreguntasXMEN = []
let arrPreguntasTodo = []
let nroRandom = [0, 1, 2, 3, 4];

// Recibe un array por parametro
function showQuestion(arr) {
    for (let i = 0; i < arr.length; i++) {
        //Genera un numero random, no me anduvo con sort
        nroRandom = Math.floor(Math.random() * (arr.length))
            //Ubico a mi array, en la posicion del numero aleatorio
        datoUsuario = parseInt(prompt(`${arr[nroRandom].pregunta} \n ${arr[nroRandom].opciones}`))
            // Evaluo lo ingresado. Linea 25
        contadorDePuntos(arr);
    }
    //Linea 74
    jugarDeNuevo();
}

//Funcion validadora y contadora
function contadorDePuntos(arr) {
    //Este while, si ingreso 0 no termina el bucle
    while (datoUsuario != 0) {
        if (isNaN(datoUsuario)) {
            alert("Debes ingresar una opcion válida.")
            showQuestion(arr);
        }
        if (datoUsuario < 0 || datoUsuario > arr.length) {
            alert("Debes ingresar una opcion válida.")
            showQuestion(arr);
        }
        //Si se ejecuta este if, suma a dichas variables. Y termina de ejecutar showQuestion() Linea 75
        if (datoUsuario == 1) {
            contadorAcertadas++
            preguntasTotales++

        } else if (datoUsuario > 0 || datoUsuario <= arr.length) {
            contadorDesacertadas++
            preguntasTotales++

        } else if (datoUsuario == 0) {
            //No lo termina, ni muestra eso por consola
            console.log("break");
            return;
        }
        //No lo termina, ni muestra eso por consola
        console.log("break");
        return;
    }


}


function alertScore() {
    //Estos son cuentas para calcular el porcentaje de respuestas correctas e incorrectas. No hay problemas con esta funcion. Se ejecuta en jugarDeNuevo
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
    //Muestro el puntaje
    alertScore()
        //Reinicio los contador
    contadorAcertadas = 0
    contadorDesacertadas = 0
    preguntasTotales = 0
        //Pregunto si quiere jugar
    elijeJuego = parseInt(prompt("Queres jugar de nuevo? \n 1. Sí \n 2. No "))
    switch (elijeJuego) {
        //Si elije este caso, va a la linea 200
        case 1:
            elijeJuego = parseInt(prompt("Sobre qué tematica queres jugar? Ingresá el nro. \n 1. UCM \n 2. X-men \n 3. TODO"))
            elegirJuego()
            break;
        case 2:
            break;
    }
}

// Arrays de Objetos. Preguntas y opciones
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
        opciones: [" 1. X-men Dias del Futuro Pasado", " 2. X-men Origenes", " 3. X-men 2", " 0. Para salir "],
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
        opciones: [" 1. X-men Dias del Futuro Pasado", " 2. X-men Origenes", " 3. X-men 2", " 0. Para salir "],
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
// Arrays de Objetos. Preguntas y opciones

// Inicia el juego 
let elijeJuego = parseInt(prompt("Sobre qué tematica queres jugar? Ingresá el nro. \n 1. UCM \n 2. X-men \n 3. TODO \n 0. Cancelar"))

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
        case 0:
            break;
        default:
            elegirJuego()
            break;
    }
}
// Si no se ejecuta, no inicia el juego
elegirJuego()