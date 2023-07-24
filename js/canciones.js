//mostrar canciones

let tablaCanciones = document.getElementById("tabla-canciones")
let reproductorInfo = document.getElementById("informacion-reproductor");


function mostrarCanciones() {
    const cancionesString = localStorage.getItem('canciones');
    const cancionRecuperadas = JSON.parse(cancionesString);
    const cancionesSinOcultar = cancionRecuperadas.filter(cancion => !cancion.estaOculta);


    tablaCanciones.innerHTML = "";
    for (let i = 0; i < cancionesSinOcultar.length; i++) {
        let cancion = cancionesSinOcultar[i];

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

    cancionesSinOcultar.forEach(cancion => {
        const botonPlay = document.getElementById(`botonPlay-${cancion.id}`);
        botonPlay.addEventListener('click', (e) => {
            e.preventDefault();
            let reproductor = document.getElementById(`reproductor`)
            reproductor.classList.remove(`d-none`)
            const audioPlayer = document.getElementById('audioPlayer');
            const songUrl = cancion.link;
            audioPlayer.src = songUrl;
            audioPlayer.play();
            reproductorInfo.innerHTML = `${cancion.nombre} de ${cancion.artista}`
            let portada = document.getElementById(`portada`);
            portada.src = `${cancion.portada}`
        });
    });

    //reproductor informacion
    let contenedorPortada = document.getElementById(`contenedor-portada`)
    let ocultarPortada = document.getElementById(`ocultar-portada`);
    ocultarPortada.addEventListener("click", (e) => {
        e.preventDefault();

        portada.classList.toggle(`d-none`)
        ocultarPortada.classList.toggle(`position-absolute`)
        contenedorPortada.classList.toggle(`position-relative`)
        ocultarPortada.innerHTML = portada.classList.contains('d-none') ? `Mostrar Portada` : `Ocultar`
    })

    function buscarCanciones() {
        const textoBuscado = document.getElementById('texto-buscador').value.toLowerCase();
        const cancionesFiltradas = cancionesSinOcultar.filter(cancion => {
            return (
                cancion.nombre.toLowerCase().includes(textoBuscado) || cancion.artista.toLowerCase().includes(textoBuscado)
            );
        });


        tablaCanciones.innerHTML = "";
        for (let i = 0; i < cancionesFiltradas.length; i++) {
            let cancion = cancionesFiltradas[i];

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
            `;
        }

        // FUNCIONALIDAD PLAY CANCIONES FILTRADAS
        cancionesFiltradas.forEach(cancion => {
            const botonPlay = document.getElementById(`botonPlay-${cancion.id}`);
            botonPlay.addEventListener('click', (e) => {
                e.preventDefault();
                let reproductor = document.getElementById(`reproductor`)
                reproductor.classList.remove(`d-none`)
                const audioPlayer = document.getElementById('audioPlayer');
                const songUrl = cancion.link;
                audioPlayer.src = songUrl;
                audioPlayer.play();
                reproductorInfo.innerHTML = `${cancion.nombre} de ${cancion.artista}`
                let portada = document.getElementById(`portada`);
                portada.src = `${cancion.portada}`
            });
        });
    }

    document.getElementById('botonBuscador').addEventListener('click', (e) => {
        e.preventDefault()
        buscarCanciones();
    });
}




mostrarCanciones()