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
mostrarCanciones();