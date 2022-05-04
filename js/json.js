fetch('http://gateway.marvel.com/v1/public/comics?ts=1000&apikey=7e83954a5a388e9cfab7dcfce184a263&hash=c963bd5f34ea7903c1c3e8b424e65745')
.then((respuesta) => respuesta.json())
.then((data) => {
    console.log(data);
})