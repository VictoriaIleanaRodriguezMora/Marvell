var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


let datoUsuario = parseInt(prompt("¿Por quien consigue Clint la gema del Alma?. \n Ingrese el nro correspondiente. \n 1. Viuda Negra \n 2.Bruja Escarlata \n 3.Gamora \n 4.Carol Danvers"))
let contadorAcertadas = 0
let contadorDesacertadas = 0

switch (datoUsuario) {
  case 1:
    contadorAcertadas++
    break;

  default:
    contadorDesacertadas++
    break;
}

datoUsuario = parseInt(prompt("Que raza es aliada de Loki en Avengers?. \n Ingrese el nro correspondiente. \n 1. Chitauri \n 2. Klintar \n 3. Kronans \n 4. Centaurians"))
switch (datoUsuario) {
  case 1:
    contadorAcertadas++
    break;

  default:
    contadorDesacertadas++
    break;
}
alert(`Has acertado ${contadorAcertadas}, y desacertado ${contadorDesacertadas}`)