<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Marvel</title>
  <meta name="description"
    content="Vas a poder encontrar informacion sobre Marvel; Studios y Comics. Los comics y peliculas están en Orden Cronologico y de Estreno. Vas a ver las Fases del UCM. Y conocer el orden de las peliculas que no forman parte del UCM.">
  <meta name="keywords" content="Marvel, Marvel Studios, Marvel Comics, Orden Marvel, Info Marvel">
  <link rel="stylesheet" href="./css/main.css">
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="https://unpkg.com/@popperjs/core@2">
  <link rel="shortcut icon" type="Imagenes/principal/icono.ico" href="/favicon.ico">
</head>

<body>
  <!-- Empieza header -->
  <header class="navbar navbar-expand-xl container-fluid navbar-dark" id="header">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span><i class="fas fa-bars"></i></span>
    </button>
    <nav class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="navbar-brand" href="./html/cronologia.php">CRONOLOGIA</a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="./html/estrenos.php">ESTRENOS</a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="./html/fases.php">FASES</a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="./html/universos.php">UNIVERSOS</a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="./html/fueraDelMCU.php">PELIS FUERA DEL UCM</a>
        </li>
      </ul>
    </nav>
  </header>
  <!-- Termina header -->

  <!-- Empieza presentacion -->
  <main id="main__marvel">
    <h1 class="marvel__titulo">
      LAS PELICULAS DE
      <a href="https://www.marvel.com/movies" class="marvel__span" target="_blank" ><img loading="lazy"
          src="./Imagenes/principal/marvelstudios.png"></a>
      EN ORDEN
    </h1>
  </main>

  <section id="section__presentacion">
    <h2 class="presentacion__h2">Importante</h2>
    <h3 class="presentacion__titulo">¡Hola persona del multiverso! 😎</h3>
    <p class="presentacion__parrafo"> Vengo a recordarte que no importa que tan nuev@ o viej@ seguidor o fan
      seas, recuerda respetar a todas las personas sin importar su conocimiento sobre Marvel. Tod@s supimos
      NADA alguna vez y lo importante es tener ganas de ver mas sobre este increible mundo!</p>
  </section>
  <!-- Termina presentacion -->

  <!-- Empieza footer -->
  <footer id="footer">
    <!-- section -->
    <div class="footer__section">
      <!-- 1er articulo -->
      <div class="footer__nav estamos_en">
        <h3 class="footer__titulo">Estamos en</h3>
        <ul class="footer__lista">
          <li> <a href="https://twitter.com/VirmCode" target="_blank"> <i class="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/in/victoriarodriguezmora" target="_blank"><i
                class="fab fa-linkedin"></i></a>
          </li>
          <li><a href="https://www.instagram.com/virmcode/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
          </li>
        </ul>
      </div>
      <!-- termina 1er articulo -->
      <!-- 2do articulo -->
      <div class="footer__nav contacto">
        <h3 class="footer__titulo">Contacto</h3>
        <ul class="footer__lista">
          <li><a href="https://wa.me//5491133990583?text=Hola%20Victoria%20" target="_blank"><i
                class="fab fa-whatsapp"></i></a></li>
          <li> <i class="fas fa-envelope" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top"
              data-bs-content="victoriaileanarodriguezmora@gmail.com"></i>
          </li>
          <li><i class="fab fa-discord" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top"
              data-bs-content="Victoria Rodriguez#1198"></i></li>
        </ul>
      </div>
      <!--termina 2do articulo -->
    </div>
    <!-- termina section -->
    <p class="footer__copy"> <a href="https://victoriarodriguez-portfolio.netlify.app/" target="_blank"> <i
          class="far fa-copyright"></i> Victoria Ileana Rodriguez Mora 2022 </a></p>
  </footer>
  <!-- Termina footer -->



  <script src="https://kit.fontawesome.com/744e7f591a.js" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
    integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
    integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
    crossorigin="anonymous"></script>
  <script src="./js/script.js"></script>
</body>

</html>