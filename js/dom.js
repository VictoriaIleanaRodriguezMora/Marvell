let botonJugas = document.querySelector(".jugas")
botonJugas.addEventListener("click", fadeOut)

function fadeOut() {
    botonJugas.style.transition = "300ms"
    botonJugas.style.opacity = "0"
    botonJugas.style.display = "hidden"
}