//mostrar canciones

let tablaCanciones = document.getElementById("tabla-canciones")
let reproductorInfo = document.getElementById("informacion-reproductor");


function mostrarCanciones() {
    const cancionesString = localStorage.getItem('canciones');
    const cancionRecuperadas = JSON.parse(cancionesString);
    tablaCanciones.innerHTML = "";
    for (let i = 0; i < cancionRecuperadas.length; i++) {
        let cancion = cancionRecuperadas[i];

        tablaCanciones.innerHTML +=
            `
        <tr>
            <td>
                <a id="botonPlay-${cancion.id}" href="" class="fa-solid fa-play" style="text-decoration: none;">
            </td>
            <th id="nombre-cancion" scope="row">${cancion.nombre}</th>
            <td id="artista-cancion">${cancion.artista}</td>
            <td>
                 <a href="" class="fa-sharp fa-regular fa-heart" style="text-decoration: none;">
            </td>
        </tr>
        `
    }

    // FUNCIONALIDAD BOTON PLAY

    cancionRecuperadas.forEach(cancion => {
        const botonPlay = document.getElementById(`botonPlay-${cancion.id}`);
        botonPlay.addEventListener('click', (e) => {
            e.preventDefault();
            const audioPlayer = document.getElementById('audioPlayer');
            const songUrl = cancion.link;
            audioPlayer.src = songUrl;
            audioPlayer.play();
            reproductorInfo.innerHTML = `${cancion.nombre} de ${cancion.artista}`

        });
    });
}



// FUNCIONALIDAD BUSCADOR

let textoBuscador = document.getElementById(`texto-buscador`);
let botonBuscador = document.getElementById(`botonBuscador`);
let errorBuscador = document.getElementById(`error-buscador`);
let contenedorFiltro = document.getElementById(`contenedor-filtro`)
let textoFiltro = document.getElementById(`texto-filtro`)
let tablaCancionesFiltrada = document.getElementById(`tabla-canciones-filtrada`);
let quitarFiltro = document.getElementById(`quitar-filtro`);

botonBuscador.addEventListener("click", (e) => {
    e.preventDefault();
    const texto = textoBuscador.value;
    if (texto === ``) {
        errorBuscador.innerHTML = `Debe escribir algo`
        errorBuscador.style.display = "block"
        setTimeout(() => {
            errorBuscador.style.display = "none"
        }, 4000)
        return
    }
    data = JSON.parse(localStorage.getItem(`canciones`))
    let cancionesFiltradas = data.filter((cancion) => {
        return cancion.artista.includes(texto);
    })

    for (let i = 0; i < cancionesFiltradas.length; i++) {
        let cancion = cancionesFiltradas[i];

        //entiendo que acá esta el error porque lo estoy ocultando pero sigue estando completo
        tablaCanciones.style.display = "none"
        tablaCancionesFiltrada.innerHTML +=
            `
        <tr>
            <td>
                <a id="botonPlay-${cancion.id}" href="" class="fa-solid fa-play" style="text-decoration: none;">
            </td>
            <th id="nombre-cancion" scope="row">${cancion.nombre}</th>
            <td id="artista-cancion">${cancion.artista}</td>
            <td>
                 <a href="" class="fa-sharp fa-regular fa-heart" style="text-decoration: none;">
            </td>
        </tr>
        `
    }
    console.log(`hay ${cancionesFiltradas.length} canciones filtradas`);

    //texto de filtro
    contenedorFiltro.classList.remove(`d-none`)
    textoFiltro.textContent += `${texto}`
    quitarFiltro.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.reload();
    })

})



mostrarCanciones()