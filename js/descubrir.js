let tabla = document.getElementById(`tabla`);
let tablaCanciones = document.getElementById("tabla-canciones")
let reproductorInfo = document.getElementById("informacion-reproductor");


function obtenerNumeroAleatorio(arreglo) {
    const randomIndex = Math.floor(Math.random() * arreglo.length);
    return randomIndex;
}


function descubrirCanciones(mood) {
    tabla.classList.remove("d-none")
    tablaCanciones.innerHTML = "";
    const cancionesString = localStorage.getItem('canciones');
    const cancionRecuperadas = JSON.parse(cancionesString);
    const cancionesSinOcultar = cancionRecuperadas.filter(cancion => !cancion.estaOculta);

    let cancionesMood = cancionesSinOcultar.filter(cancion => cancion.mood === mood);
    let indexCancion = obtenerNumeroAleatorio(cancionesMood);
    let cancion = cancionesMood[indexCancion];


    tablaCanciones.innerHTML +=
        `
        <tr>
            <td>

            </td>
            <th id="nombre-cancion" scope="row">${cancion.nombre}</th>
            <td id="artista-cancion">${cancion.artista}</td>
            <td>
                 <a href="" class="fa-sharp fa-regular fa-heart" style="text-decoration: none;">
            </td>
        </tr>
        `

    let reproductor = document.getElementById(`reproductor`)
    reproductor.classList.remove(`d-none`)
    const audioPlayer = document.getElementById('audioPlayer');
    const songUrl = cancion.link;
    audioPlayer.src = songUrl;
    audioPlayer.play();
    reproductorInfo.innerHTML = `${cancion.nombre} de ${cancion.artista}`
    let portada = document.getElementById(`portada`);
    portada.src = `${cancion.portada}`

}


let botonFiestero = document.getElementById(`fiestero`)
botonFiestero.addEventListener("click", (e) => {
    e.preventDefault();
    descubrirCanciones("Fiestero")
})

let botonEnergico = document.getElementById(`energico`)
botonEnergico.addEventListener("click", (e) => {
    e.preventDefault();
    descubrirCanciones("Alegre")
})

let botonEnamorado = document.getElementById(`enamorado`)
botonEnamorado.addEventListener("click", (e) => {
    e.preventDefault();
    descubrirCanciones("Romántico")
})

let botonMelancolico = document.getElementById(`melancolico`)
botonMelancolico.addEventListener("click", (e) => {
    e.preventDefault();
    descubrirCanciones("Melancólico")
})

let botonTriste = document.getElementById(`triste`)
botonTriste.addEventListener("click", (e) => {
    e.preventDefault();
    descubrirCanciones("Triste")
})

function cancionRandom() {
    tabla.classList.remove("d-none")
    tablaCanciones.innerHTML = "";
    const cancionesString = localStorage.getItem('canciones');
    const cancionRecuperadas = JSON.parse(cancionesString);
    const cancionesSinOcultar = cancionRecuperadas.filter(cancion => !cancion.estaOculta);

    let indexCancion = obtenerNumeroAleatorio(cancionesSinOcultar);
    let cancion = cancionesSinOcultar[indexCancion];


    tablaCanciones.innerHTML +=
        `
    <tr>
        <td>

        </td>
        <th id="nombre-cancion" scope="row">${cancion.nombre}</th>
        <td id="artista-cancion">${cancion.artista}</td>
        <td>
             <a href="" class="fa-sharp fa-regular fa-heart" style="text-decoration: none;">
        </td>
    </tr>
    `

    let reproductor = document.getElementById(`reproductor`)
    reproductor.classList.remove(`d-none`)
    const audioPlayer = document.getElementById('audioPlayer');
    const songUrl = cancion.link;
    audioPlayer.src = songUrl;
    audioPlayer.play();
    reproductorInfo.innerHTML = `${cancion.nombre} de ${cancion.artista}`
    let portada = document.getElementById(`portada`);
    portada.src = `${cancion.portada}`
}

let botonSuerte = document.getElementById(`suerte`)
botonSuerte.addEventListener("click", (e) => {
    e.preventDefault();
    cancionRandom();
})


function cancionIdioma(idioma) {
    tabla.classList.remove("d-none")
    tablaCanciones.innerHTML = "";
    const cancionesString = localStorage.getItem('canciones');
    const cancionRecuperadas = JSON.parse(cancionesString);
    const cancionesSinOcultar = cancionRecuperadas.filter(cancion => !cancion.estaOculta);

    let cancionesIdioma = cancionesSinOcultar.filter(cancion => cancion.idioma === idioma);

    let indexCancion = obtenerNumeroAleatorio(cancionesIdioma);
    let cancion = cancionesIdioma[indexCancion];


    tablaCanciones.innerHTML +=
        `
        <tr>
            <td>

            </td>
            <th id="nombre-cancion" scope="row">${cancion.nombre}</th>
            <td id="artista-cancion">${cancion.artista}</td>
            <td>
                 <a href="" class="fa-sharp fa-regular fa-heart" style="text-decoration: none;">
            </td>
        </tr>
        `

    let reproductor = document.getElementById(`reproductor`)
    reproductor.classList.remove(`d-none`)
    const audioPlayer = document.getElementById('audioPlayer');
    const songUrl = cancion.link;
    audioPlayer.src = songUrl;
    audioPlayer.play();
    reproductorInfo.innerHTML = `${cancion.nombre} de ${cancion.artista}`
    let portada = document.getElementById(`portada`);
    portada.src = `${cancion.portada}`
}

let botonEspaniol = document.getElementById(`espaniol`)
botonEspaniol.addEventListener("click", (e) => {
    e.preventDefault();
    cancionIdioma("espaniol");
})

let botonIngles = document.getElementById(`ingles`)
botonIngles.addEventListener("click", (e) => {
    e.preventDefault();
    cancionIdioma("ingles");
})