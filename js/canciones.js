// let canciones = JSON.parse(localStorage.getItem("canciones")) || [];
// class Cancion {
//     constructor(id, nombre, artista, mood, mp3, itsPlay = true) {
//         this.id = id;
//         this.nombre = nombre;
//         this.artista = artista;
//         this.mood = mood;
//         this.mp3 = mp3;
//         this.itsPlay = itsPlay;
//     }
// }

// let idRandomCancion = () => {
//     if (canciones.length < 0) {
//         return canciones[canciones.length - 1].id + Math.random(Math.round() * 100);
//     } else {
//         return (Math.round(Math.random() * 100))
//     }
// }

// let volverasAMiCama = new Cancion(`1`, "Volveras", "fabian show", "alegre")
// canciones.push(volverasAMiCama)
// localStorage.setItem("canciones", JSON.stringify(canciones))