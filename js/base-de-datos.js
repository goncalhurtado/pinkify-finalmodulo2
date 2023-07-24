let canciones = JSON.parse(localStorage.getItem("canciones")) || [];

class Cancion {
    constructor(id, nombre, artista, mood, link, portada, estaOculta = false) {
        this.id = id;
        this.nombre = nombre;
        this.artista = artista;
        this.mood = mood;
        this.link = link;
        this.portada = portada;
        this.estaOculta = estaOculta

    }
}

if (canciones.length === 0) {
    let cancion1 = new Cancion(1, "Volveras a mi cama", "Fabian Show", "Alegre", "https://res.cloudinary.com/dhvgi2cmq/video/upload/v1690223762/pinkify/canciones/volverasAMiCama_fbglvl.mp3", "https://res.cloudinary.com/dhvgi2cmq/image/upload/v1690222404/pinkify/portada-volveras_axfvhk.jpg")
    canciones.push(cancion1)
    localStorage.setItem("canciones", JSON.stringify(canciones));

    let cancion2 = new Cancion(2, "Persiana Americana", "Soda Stereo", "Alegre", "https://res.cloudinary.com/dhvgi2cmq/video/upload/v1690223772/pinkify/canciones/Persiana_americana_Soda_Stereo___Letra_xc84mt.mp3", "https://res.cloudinary.com/dhvgi2cmq/image/upload/v1690223347/pinkify/persiana_sbfenr.png")
    canciones.push(cancion2)
    localStorage.setItem("canciones", JSON.stringify(canciones));

    let cancion3 = new Cancion(3, "Cancion para mi muerte", "Sui Generis", "Melancolico", "https://res.cloudinary.com/dhvgi2cmq/video/upload/v1690223769/pinkify/canciones/Sui_Generis_-_Canci%C3%B3n_para_Mi_Muerte_Official_Audio_r1l966.webm", "https://res.cloudinary.com/dhvgi2cmq/image/upload/v1690223347/pinkify/portadas/cancionparamimuerte_hlb3jc.png")
    canciones.push(cancion3)
    localStorage.setItem("canciones", JSON.stringify(canciones));

    let cancion4 = new Cancion(4, "De Música Ligera", "Soda Stereo", "Alegre", "https://res.cloudinary.com/dhvgi2cmq/video/upload/v1690223771/pinkify/canciones/Soda_Stereo_-_De_M%C3%BAsica_Ligera_nhthuv.mp3", "https://res.cloudinary.com/dhvgi2cmq/image/upload/v1690223347/pinkify/musicaligera_ybpt8w.png")
    canciones.push(cancion4)
    localStorage.setItem("canciones", JSON.stringify(canciones));

}