let canciones = JSON.parse(localStorage.getItem("canciones-local")) || [];

class Cancion {
    constructor(id, nombre, artista, mood, link, estaOculta = false) {
        this.id = id;
        this.nombre = nombre;
        this.artista = artista;
        this.mood = mood;
        this.link = link;
        this.estaOculta = estaOculta

    }
}

let cancion1 = new Cancion("1", "Volveras a mi cama", "Fabian Show", "Alegre", "https://firebasestorage.googleapis.com/v0/b/pinkify-data.appspot.com/o/volverasAMiCama.mp3?alt=media&token=abd7809a-cc37-43ac-aa0f-55562c8b1d61")
canciones.push(cancion1)
localStorage.setItem("canciones", JSON.stringify(canciones));

let cancion2 = new Cancion("2", "Persiana Americana", "Soda Stereo", "Alegre", "https://firebasestorage.googleapis.com/v0/b/pinkify-data.appspot.com/o/Persiana%20americana%3B%20Soda%20Stereo%20__Letra.mp3?alt=media&token=16dd656c-3acc-47ff-a6f5-89aca27c0460")
canciones.push(cancion2)
localStorage.setItem("canciones", JSON.stringify(canciones));