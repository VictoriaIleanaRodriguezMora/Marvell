let botonJugas = document.querySelector(".jugas")
let titulo = document.querySelector("#titulo")
let secccionQuizz = document.querySelector(".quizz")
let divCategorias = document.querySelector(".categorias")
let contenedorPreguntas = document.querySelector(".contenedor__preguntas")
let botonesCategorias = document.querySelectorAll(".categorias > button")
let botonUCM = document.querySelector("#botonUCM")
let botonXMEN = document.querySelector("#botonXMEN")
let botonTODO = document.querySelector("#botonTODO")
let arrBotones = [botonUCM, botonXMEN, botonTODO]
contenedorPreguntas.classList.toggle("fadeOut")
divCategorias.classList.toggle("fadeOut")

// Se clickea el boton ¿JUGAS?
botonJugas.addEventListener("click", fadeOutInicial)
//Se oculta ese boton, y la presentacion del Inicio
function fadeOutInicial() {
    botonJugas.classList.toggle("fadeOut")
    titulo.classList.toggle("fadeOut")
    // Se muestran las categorias para jugar
    divCategorias.classList.toggle("fadeShow")
}


function categorySelected(x){
    console.log(botonUCM.classList)
    switch (x) {
        case 1:
            botonUCM.classList.add("buttonSelected")
            botonXMEN.classList.add('fadeOut');
            botonTODO.classList.add('fadeOut');
            break;
    
        case 2:
            botonXMEN.classList.add("buttonSelected")
            botonUCM.classList.add('fadeOut');
            botonTODO.classList.add('fadeOut');
            break;
    
        case 3:
            botonTODO.classList.add("buttonSelected")
            botonUCM.classList.add('fadeOut');
            botonXMEN.classList.add('fadeOut');
            break;
    
        default:
            break;
    }
}
// function showCategories() {

//     for (let i = 0; i < botonesCategorias.length; i++) {
//         botonesCategorias[i].addEventListener("click", function () {
//             botonesCategorias[i].classList.toggle("buttonSelected")
//         })
//         console.log(botonesCategorias[i].classList);
//     }

// }
// showCategories()
// if (botonesCategorias.classList.contains('buttonSelected')) {
//     botonesCategorias.classList.toggle('fadeOut')
// }