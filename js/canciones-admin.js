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
        if (cancion.estaOculta === false) {
            tablaCanciones.innerHTML +=
                `
        <tr>

            <th id="nombre-cancion" scope="row">${cancion.nombre}</th>
            <td id="artista-cancion">${cancion.artista}</td>
            <td>
            <a href="" class="fa-solid fa-pen-to-square me-2" style="text-decoration: none;" data-bs-toggle="modal" data-bs-target="#editar-cancion">
            <a id="botonOcultar-${cancion.id}" href="" class="fa-solid fa-eye-slash me-2" style="text-decoration: none;" >
                <a href="" class="fa-solid fa-trash" style="text-decoration: none">
            </td>
        </tr>
        `
        } else {
            tablaCanciones.innerHTML +=
                `
    <tr class="table-secondary cancion-oculta">
        <th id="nombre-cancion" scope="row">${cancion.nombre}</th>
        <td id="artista-cancion">${cancion.artista}</td>
        <td>
        <a href="" class="fa-solid fa-pen-to-square me-2" style="text-decoration: none;" data-bs-toggle="modal" data-bs-target="#editar-cancion">
        <a id="botonOcultar-${cancion.id}" href="" class="fa-solid fa-eye me-2" style="text-decoration: none;" >
            <a href="" class="fa-solid fa-trash" style="text-decoration: none">
        </td>
    </tr>
    `
        }
    }
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