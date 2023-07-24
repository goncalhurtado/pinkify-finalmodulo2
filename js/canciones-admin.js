//confirmar que estes loggeado

const usuarioLogueadoString = localStorage.getItem(`usuarioLogueadoAdmin`)
const usuarioLogueadoAdmin = JSON.parse(usuarioLogueadoString);

if (usuarioLogueadoAdmin === null) {
    console.log(`no hay usuario admin logueado`);
} else {
    console.log(`esta logueado el ADMIN ${usuarioLogueadoAdmin.nombre}`);
}

//editor de canciones


let tablaCanciones = document.getElementById("tabla-canciones")

function mostrarCancionesAdmin() {
    const cancionesString = localStorage.getItem('canciones');
    const cancionRecuperadas = JSON.parse(cancionesString);
    tablaCanciones.innerHTML = "";
    for (let i = 0; i < cancionRecuperadas.length; i++) {
        let cancion = cancionRecuperadas[i];

        tablaCanciones.innerHTML +=
            `
        <tr class=" ${cancion.estaOculta?"table-secondary":""}">
            <th id="nombre-cancion" scope="row">${cancion.nombre}</th>
            <td id="artista-cancion">${cancion.artista}</td>
            <td id="estado-cancion">${cancion.estaOculta?"Oculto":"Visible"}</td>
            <td>
                <a href="" class="fa-solid fa-pen-to-square me-2" style="text-decoration: none;" data-bs-toggle="modal" data-bs-target="#editar-cancion">
                <a id="botonOcultar-${cancion.id}" class="fa-solid ${cancion.estaOculta?"fa-eye":"fa-eye-slash"} me-2" style="text-decoration: none;" >
                <a href="" class="fa-solid fa-trash text-danger" style="text-decoration: none">
            </td>
        </tr>
        `

        //     }


        // const botonOcultar = document.getElementById(`botonOcultar-${cancion.id}`);
        // botonOcultar.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     ocultarCancion(cancion.id);
        //     mostrarCancionesAdmin(); // Para refrescar la lista de canciones mostradas
        // });


        // cancionRecuperadas.forEach(cancion => {
        //     const botonPlay = document.getElementById(`botonPlay-${cancion.id}`);
        //     botonPlay.addEventListener('click', (e) => {
        //         e.preventDefault();
        //         const audioPlayer = document.getElementById('audioPlayer');
        //         const songUrl = cancion.link;
        //         audioPlayer.src = songUrl;
        //         audioPlayer.play();
        //         reproductorInfo.innerHTML = `${cancion.nombre} de ${cancion.artista}`

        //     });
        // });

    }
}

function ocultarCancion(id) {
    const cancionesString = localStorage.getItem('canciones');
    const cancionRecuperadas = JSON.parse(cancionesString);
    for (let i = 0; i < cancionRecuperadas.length; i++) {
        if (cancionRecuperadas[i].id === id) {
            cancionRecuperadas[i].estaOculta = true;
            break;
        }
    }
    localStorage.setItem('canciones', JSON.stringify(cancionRecuperadas));
}




//AGREGAR CANCION

let idRandom = () => {
    return Math.floor(Math.random() * 91) + 10;
}

formAgregarCancion.addEventListener("submit", (e) => {
    e.preventDefault()
    let id = idRandom();
    let nombre = document.getElementById(`nombre-agregar`).value
    let artista = document.getElementById(`artista-agregar`).value
    let mood = document.getElementById(`mood-agregar`).value
    let link = document.getElementById(`link-agregar`).value

    let nuevaCancion = new Cancion(id, nombre, artista, mood, link, false)
    canciones.push(nuevaCancion)
    localStorage.setItem("canciones", JSON.stringify(canciones))
    formAgregarCancion.reset()
    console.log(canciones.length);
    alert(`cancion agregada correctamente`);
    window.location.reload();
})


mostrarCancionesAdmin()