let tablaCanciones = document.getElementById("tabla-canciones")
let reproductorInfo = document.getElementById("informacion-reproductor");


function obtenerNumeroAleatorio(arreglo) {
    const randomIndex = Math.floor(Math.random() * arreglo.length);
    return randomIndex;
}


function descubrirCanciones(mood) {
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


let botonFiestero = document.getElementById(`fiestero`)
botonFiestero.addEventListener("click", (e) => {
    e.preventDefault();
    tablaCanciones.innerHTML += ""
    descubrirCanciones("Fiestero")
})


// FUNCIONALIDAD BOTON FIESTERO

// let cancionesFiestero = cancionesSinOcultar.filter(cancion => cancion.mood === "Fiestero");
// console.log(cancionesFiestero);

// cancionesFiestero.forEach(cancion => {
//     const botonFiestero = document.getElementById(`botonPlay-${cancion.id}`);
//     botonFiestero.addEventListener('click', (e) => {
//         e.preventDefault();
//         console.log(`1`);
//         let reproductor = document.getElementById(`reproductor`)
//         reproductor.classList.remove(`d-none`)
//         const audioPlayer = document.getElementById('audioPlayer');
//         const songUrl = cancion.link;
//         audioPlayer.src = songUrl;
//         audioPlayer.play();
//         reproductorInfo.innerHTML = `${cancion.nombre} de ${cancion.artista}`
//         let portada = document.getElementById(`portada`);
//         portada.src = `${cancion.portada}`
//     });
// });

// //reproductor informacion
// let contenedorPortada = document.getElementById(`contenedor-portada`)
// let ocultarPortada = document.getElementById(`ocultar-portada`);
// ocultarPortada.addEventListener("click", (e) => {
//     e.preventDefault();

//     portada.classList.toggle(`d-none`)
//     ocultarPortada.classList.toggle(`position-absolute`)
//     contenedorPortada.classList.toggle(`position-relative`)
//     ocultarPortada.innerHTML = portada.classList.contains('d-none') ? ' Mostrar Portada' : '';

//     const ocultar = portada.classList.contains('d-none');

//     ocultarPortada.classList.remove('fa-chevron-up', 'fa-chevron-down', 'fa-2x');

//     if (ocultar) {
//         ocultarPortada.classList.add('fa-chevron-up');
//     } else {
//         ocultarPortada.classList.add('fa-chevron-down', 'fa-2x');
//     }

// })