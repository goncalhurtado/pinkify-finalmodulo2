//confirmar que estes loggeado

const usuarioLogueadoString = localStorage.getItem(`usuarioLogueadoAdmin`)
const usuarioLogueadoAdmin = JSON.parse(usuarioLogueadoString);

if (usuarioLogueadoAdmin === null) {
    console.log(`no hay usuario admin logueado`);
} else {
    console.log(`esta logueado el ADMIN ${usuarioLogueadoAdmin.nombre}`);
}

let tablaCanciones = document.getElementById("tabla-canciones")

function mostrarCancionesAdmin() {
    const cancionesString = localStorage.getItem('canciones');
    const cancionRecuperadas = JSON.parse(cancionesString);
    tablaCanciones.innerHTML = "";
    for (let i = 0; i < cancionRecuperadas.length; i++) {
        let cancion = cancionRecuperadas[i];

        tablaCanciones.innerHTML +=
            `
        <tr  class="">
            <td class="${cancion.estaOculta?"tabla-oculta":"table-oscuro"}" id="nombre-cancion" scope="row">${cancion.nombre}</td>
            <td class="${cancion.estaOculta?"tabla-oculta":"table-oscuro"}" id="artista-cancion">${cancion.artista}</td>
            <td class="${cancion.estaOculta?"tabla-oculta":"table-oscuro"}" id="estado-cancion">${cancion.estaOculta?"Oculto":"Visible"}</td>
            <td class="${cancion.estaOculta?"tabla-oculta":"table-oscuro"} text-center">
                <a id="botonEditar-${cancion.id}" href="" class="fa-solid fa-pen-to-square me-2 text-white" style="text-decoration: none;" data-bs-toggle="modal" data-bs-target="#editar-cancion">
                <a id="botonOcultar-${cancion.id}" href="" class="fa-solid ${cancion.estaOculta?"fa-eye":"fa-eye-slash"} me-2 text-white" style="text-decoration: none;" >
                <a id="botonEliminar-${cancion.id}" href="" class="fa-solid fa-trash text-danger" style="text-decoration: none" data-bs-toggle="modal" data-bs-target="#eliminar-cancion">
            </td>
        </tr>
        `

    }

    //boton editar
    cancionRecuperadas.forEach(cancion => {
        const botonEditar = document.getElementById(`botonEditar-${cancion.id}`);
        botonEditar.addEventListener('click', (e) => {
            e.preventDefault();
            let id = document.getElementById(`id-editar`);
            id.value = `${cancion.id}`
            let nombre = document.getElementById(`nombre-editar`)
            nombre.value = `${cancion.nombre}`
            let artista = document.getElementById(`artista-editar`)
            artista.value = `${cancion.artista}`
            let mood = document.getElementById(`mood-editar`)
            mood.value = `${cancion.mood}`
            let link = document.getElementById(`link-editar`)
            link.value = `${cancion.link}`

            formEditarCancion.addEventListener("submit", (e) => {
                e.preventDefault()
                let nombre = document.getElementById(`nombre-editar`).value
                let artista = document.getElementById(`artista-editar`).value
                let mood = document.getElementById(`mood-editar`).value
                let link = document.getElementById(`link-editar`).value

                let canciones = JSON.parse(localStorage.getItem("canciones"));

                //encontrar el index trayendolo del boton
                let index = -1;
                for (i = 0; i < canciones.length; i++) {
                    if (canciones[i].id == cancion.id) {
                        index = i
                        break
                    }
                }

                canciones[index].nombre = nombre;
                canciones[index].artista = artista;
                canciones[index].mood = mood;
                canciones[index].link = link;

                localStorage.setItem("canciones", JSON.stringify(canciones))
                formEditarCancion.reset()
                alert(`cancion editada correctamente`);
                window.location.reload();
            })
        });
    });

    //boton ocultar

    cancionRecuperadas.forEach(cancion => {
        const botonOcultar = document.getElementById(`botonOcultar-${cancion.id}`);
        botonOcultar.addEventListener('click', (e) => {
            e.preventDefault();
            if (cancion.estaOculta === false) {
                ocultarCancion(cancion.id)
                console.log(`se ocultó la cancion ${cancion.nombre}`);
            } else {
                mostrarCancion(cancion.id)
                console.log(`se mostrò la cancion ${cancion.nombre}`);
            }
        });
    });

    //boton eliminar

    cancionRecuperadas.forEach(cancion => {
        const botonEliminar = document.getElementById(`botonEliminar-${cancion.id}`);
        botonEliminar.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(`asd`);
            let textoModal = document.getElementById(`texto-modal-eliminar`)
            textoModal.innerHTML = `¿Estas seguro que quieres eliminar ${cancion.nombre}?`

            let confirmacionEliminar = document.getElementById(`confirmacion-eliminar`);
            confirmacionEliminar.addEventListener("click", (e) => {
                e.preventDefault();


                let canciones = JSON.parse(localStorage.getItem("canciones"));

                //encontrar el index trayendolo del boton
                let index = -1;
                for (i = 0; i < canciones.length; i++) {
                    if (canciones[i].id == cancion.id) {
                        index = i
                        break
                    }
                }

                let botonConf = document.getElementById(`boton-conf`)
                botonConf.classList.add(`d-none`)
                let animacionEliminar = document.getElementById(`animacion-eliminar`)
                animacionEliminar.classList.remove(`d-none`)
                let textoEliminar = document.getElementById(`texto-eliminar`)
                textoEliminar.classList.remove("d-none")
                textoEliminar.innerHTML = `Eliminando "${cancion.nombre}"...`

                setTimeout(() => {
                    canciones.splice(index, 1);
                    localStorage.setItem("canciones", JSON.stringify(canciones))
                    window.location.reload();
                }, 1000)

                return
            })

        });
    });
}


//OCULTAR, MOSTRAR CANCION

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
    window.location.reload();
}

function mostrarCancion(id) {
    const cancionesString = localStorage.getItem('canciones');
    const cancionRecuperadas = JSON.parse(cancionesString);
    for (let i = 0; i < cancionRecuperadas.length; i++) {
        if (cancionRecuperadas[i].id === id) {
            cancionRecuperadas[i].estaOculta = false;
            break;
        }
    }
    localStorage.setItem('canciones', JSON.stringify(cancionRecuperadas));
    window.location.reload();
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
    let portada = document.getElementById(`portada-agregar`).value
    let idioma = document.getElementById(`idioma-agregar`).value
    let error = document.getElementById(`error`);

    if (nombre === "" || artista === "" || link === "" || portada === "") {

    }


    let nuevaCancion = new Cancion(id, nombre, artista, mood, link, portada, idioma, false)
    canciones.push(nuevaCancion)
    localStorage.setItem("canciones", JSON.stringify(canciones))
    formAgregarCancion.reset()
    console.log(canciones.length);
    alert(`cancion agregada correctamente`);
    window.location.reload();
})

// ELIMINAR CANCION




mostrarCancionesAdmin()