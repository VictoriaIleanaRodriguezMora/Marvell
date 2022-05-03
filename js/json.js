fetch('../json/basePregs.json')
.then((respuesta) => respuesta.json())
.then((data) => {
    console.log(data);
})