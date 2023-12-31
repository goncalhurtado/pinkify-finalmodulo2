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
            let portada = document.getElementById(`portada-editar`)
            portada.value = `${cancion.portada}`
            let idioma = document.getElementById(`idioma-editar`)
            idioma.value = `${cancion.idioma}`


            formEditarCancion.addEventListener("submit", (e) => {
                e.preventDefault()
                let nombre = document.getElementById(`nombre-editar`).value
                let artista = document.getElementById(`artista-editar`).value
                let mood = document.getElementById(`mood-editar`).value
                let link = document.getElementById(`link-editar`).value
                let portada = document.getElementById(`portada-editar`).value
                let idioma = document.getElementById(`idioma-editar`).value
                let error = document.getElementById(`error-editar`);


                if (nombre === "" || artista === "" || link === "" || portada === "") {
                    error.innerHTML = `todos los campos son obligatorios`;
                    error.classList.add("text-bg-danger")
                    error.classList.remove("d-none")
                    setTimeout(() => {
                        error.classList.add("d-none")
                        error.classList.remove("text-bg-danger")
                    }, 3000)
                    return;
                }

                if (mood === "" || idioma === "") {
                    error.innerHTML = `Debe seleccionar Mood e Idioma`;
                    error.classList.add("text-bg-danger")
                    error.classList.remove("d-none")
                    setTimeout(() => {
                        error.classList.add("d-none")
                        error.classList.remove("text-bg-danger")
                    }, 3000)
                    return;
                }


                let canciones = JSON.parse(localStorage.getItem("canciones"));
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
                canciones[index].portada = portada;
                canciones[index].idioma = idioma;

                localStorage.setItem("canciones", JSON.stringify(canciones))
                formEditarCancion.reset()
                error.classList.remove("d-none")
                error.classList.remove("text-bg-danger", "rounded-2", "ps-3", "pe-3")
                error.classList.add("text-bg-success", "rounded-2", "ps-3", "pe-3")
                error.innerHTML = "Cancion editada correctamente"
                setTimeout(() => {
                    window.location.reload();
                }, 3000)
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
            } else {
                mostrarCancion(cancion.id)
            }
        });
    });

    //boton eliminar

    cancionRecuperadas.forEach(cancion => {
        const botonEliminar = document.getElementById(`botonEliminar-${cancion.id}`);
        botonEliminar.addEventListener('click', (e) => {
            e.preventDefault();
            let textoModal = document.getElementById(`texto-modal-eliminar`)
            textoModal.innerHTML = `¿Estas seguro que quieres eliminar ${cancion.nombre}?`

            let confirmacionEliminar = document.getElementById(`confirmacion-eliminar`);
            confirmacionEliminar.addEventListener("click", (e) => {
                e.preventDefault();

                let canciones = JSON.parse(localStorage.getItem("canciones"));

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
    let error = document.getElementById(`error-agregar`);

    if (nombre === "" || artista === "" || link === "" || portada === "") {
        error.innerHTML = `todos los campos son obligatorios`;
        error.classList.add("text-bg-danger")
        error.classList.remove("d-none")
        setTimeout(() => {
            error.classList.add("d-none")
            error.classList.remove("text-bg-danger")
        }, 3000)
        return;
    }

    if (mood === "" || idioma === "") {
        error.innerHTML = `Debe seleccionar Mood e Idioma`;
        error.classList.add("text-bg-danger")
        error.classList.remove("d-none")
        setTimeout(() => {
            error.classList.add("d-none")
            error.classList.remove("text-bg-danger")
        }, 3000)
        return;
    }


    let validarCancion = canciones.find((cancion) => {
        return cancion.nombre === nombre
    });
    if (validarCancion != undefined) {
        error.innerHTML = `Esta cancion ya se encuentra en el catalogo`;
        error.classList.add("text-bg-danger")
        error.classList.remove("d-none")
        formAgregarCancion.reset()
        setTimeout(() => {
            error.classList.add("d-none")
            error.classList.remove("text-bg-danger")
        }, 4000)
        return;
    }

    let nuevaCancion = new Cancion(id, nombre, artista, mood, link, portada, idioma, false)
    canciones.push(nuevaCancion)
    localStorage.setItem("canciones", JSON.stringify(canciones))
    formAgregarCancion.reset()
    error.classList.remove("d-none")
    error.classList.remove("text-bg-danger", "rounded-2", "ps-3", "pe-3")
    error.classList.add("text-bg-success", "rounded-2", "ps-3", "pe-3")
    error.innerHTML = "Cancion agregada correctamente"
    setTimeout(() => {
        window.location.reload();
    }, 3000)
})

// ELIMINAR CANCION




mostrarCancionesAdmin()