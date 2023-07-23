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
            const audioPlayer = document.getElementById('audioPlayer');
            const songUrl = cancion.link;
            audioPlayer.src = songUrl;
            audioPlayer.play();
            reproductorInfo.innerHTML = `${cancion.nombre} de ${cancion.artista}`

        });
    });

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
                const audioPlayer = document.getElementById('audioPlayer');
                const songUrl = cancion.link;
                audioPlayer.src = songUrl;
                audioPlayer.play();
                reproductorInfo.innerHTML = `${cancion.nombre} de ${cancion.artista}`;
            });
        });
    }

    document.getElementById('botonBuscador').addEventListener('click', (e) => {
        e.preventDefault()
        buscarCanciones();
    });
}


// Función para realizar la búsqueda y mostrar solo las canciones que coincidan con el término buscado


// Evento de clic para el botón de búsqueda


// Evento de clic para el botón "Cancelar"
// document.getElementById('botonCancelar').addEventListener('click', () => {
//     mostrarTodasLasCanciones();
// });





// FUNCIONALIDAD BUSCADOR

// let textoBuscador = document.getElementById(`texto-buscador`);
// let botonBuscador = document.getElementById(`botonBuscador`);
// let errorBuscador = document.getElementById(`error-buscador`);
// let contenedorFiltro = document.getElementById(`contenedor-filtro`)
// let textoFiltro = document.getElementById(`texto-filtro`)
// let tablaCancionesFiltrada = document.getElementById(`tabla-canciones-filtrada`);
// let quitarFiltro = document.getElementById(`quitar-filtro`);

// botonBuscador.addEventListener("click", (e) => {
//     e.preventDefault();
//     const texto = textoBuscador.value;
//     if (texto === ``) {
//         errorBuscador.innerHTML = `Debe escribir algo`
//         errorBuscador.style.display = "block"
//         setTimeout(() => {
//             errorBuscador.style.display = "none"
//         }, 4000)
//         return
//     }
//     data = JSON.parse(localStorage.getItem(`canciones`))
//     let cancionesFiltradas = data.filter((cancion) => {
//         return cancion.artista.includes(texto);
//     })

//     for (let i = 0; i < cancionesFiltradas.length; i++) {
//         let cancion = cancionesFiltradas[i];

//         //entiendo que acá esta el error porque lo estoy ocultando pero sigue estando completo
//         tablaCanciones.style.display = "none"
//         tablaCancionesFiltrada.innerHTML +=
//             `
//         <tr>
//             <td>
//                 <a id="botonPlay-${cancion.id}" href="" class="fa-solid fa-play" style="text-decoration: none;">
//             </td>
//             <th id="nombre-cancion" scope="row">${cancion.nombre}</th>
//             <td id="artista-cancion">${cancion.artista}</td>
//             <td>
//                  <a href="" class="fa-sharp fa-regular fa-heart" style="text-decoration: none;">
//             </td>
//         </tr>
//         `
//     }
//     console.log(`hay ${cancionesFiltradas.length} canciones filtradas`);


//     //texto de filtro
//     contenedorFiltro.classList.remove(`d-none`)
//     textoFiltro.textContent += `${texto}`
//     quitarFiltro.addEventListener("click", (e) => {
//         e.preventDefault();
//         window.location.reload();
//     })

// })



mostrarCanciones()