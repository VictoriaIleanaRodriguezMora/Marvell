function switchUser() {
    switch (datoUsuario) {
        case 1:
            contadorAcertadas++;
            break;

        default:
            contadorDesacertadas++;
            break;
    }

    function jugar() {
        while (datoUsuario != 5) {}



    }



    alert(`Has acertado ${contadorAcertadas}, y desacertado ${contadorDesacertadas}`);
}