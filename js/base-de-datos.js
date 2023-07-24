let canciones = JSON.parse(localStorage.getItem("canciones")) || [];

class Cancion {
    constructor(id, nombre, artista, mood, link, portada, idioma, estaOculta = false) {
        this.id = id;
        this.nombre = nombre;
        this.artista = artista;
        this.mood = mood;
        this.link = link;
        this.portada = portada;
        this.idioma = idioma;
        this.estaOculta = estaOculta

    }
}

if (canciones.length === 0) {
    let cancion1 = new Cancion(1, "Volveras a mi cama", "Fabian Show", "Fiestero", "https://res.cloudinary.com/dhvgi2cmq/video/upload/v1690223762/pinkify/canciones/volverasAMiCama_fbglvl.mp3", "https://res.cloudinary.com/dhvgi2cmq/image/upload/v1690222404/pinkify/portada-volveras_axfvhk.jpg", "espaniol")
    canciones.push(cancion1)
    localStorage.setItem("canciones", JSON.stringify(canciones));

    let cancion2 = new Cancion(2, "Persiana Americana", "Soda Stereo", "Alegre", "https://res.cloudinary.com/dhvgi2cmq/video/upload/v1690223772/pinkify/canciones/Persiana_americana_Soda_Stereo___Letra_xc84mt.mp3", "https://res.cloudinary.com/dhvgi2cmq/image/upload/v1690223347/pinkify/persiana_sbfenr.png", "espaniol")
    canciones.push(cancion2)
    localStorage.setItem("canciones", JSON.stringify(canciones));

    let cancion3 = new Cancion(3, "Cancion para mi muerte", "Sui Generis", "Melancólico", "https://res.cloudinary.com/dhvgi2cmq/video/upload/v1690223769/pinkify/canciones/Sui_Generis_-_Canci%C3%B3n_para_Mi_Muerte_Official_Audio_r1l966.webm", "https://res.cloudinary.com/dhvgi2cmq/image/upload/v1690223347/pinkify/portadas/cancionparamimuerte_hlb3jc.png", "espaniol")
    canciones.push(cancion3)
    localStorage.setItem("canciones", JSON.stringify(canciones));

    let cancion4 = new Cancion(4, "De Música Ligera", "Soda Stereo", "Alegre", "https://res.cloudinary.com/dhvgi2cmq/video/upload/v1690223771/pinkify/canciones/Soda_Stereo_-_De_M%C3%BAsica_Ligera_nhthuv.mp3", "https://res.cloudinary.com/dhvgi2cmq/image/upload/v1690223347/pinkify/musicaligera_ybpt8w.png", "espaniol")
    canciones.push(cancion4)
    localStorage.setItem("canciones", JSON.stringify(canciones));

    let cancion5 = new Cancion(5, "Rata Inmunda", "Paquita La Del Barrio", "Fiestero", "https://res.cloudinary.com/dhvgi2cmq/video/upload/v1690235773/pinkify/canciones/ratainmunda_ylbjgp.mp3", "https://res.cloudinary.com/dhvgi2cmq/image/upload/v1690235694/pinkify/portadas/rata_dhihdd.jpg", "espaniol")
    canciones.push(cancion5)
    localStorage.setItem("canciones", JSON.stringify(canciones));

    let cancion6 = new Cancion(6, "Last Train to London", "Electric Light Orchestra", "Fiestero", "https://res.cloudinary.com/dhvgi2cmq/video/upload/v1690236126/pinkify/canciones/last_zkron4.mp3", "https://res.cloudinary.com/dhvgi2cmq/image/upload/v1690236167/pinkify/portadas/last_wokhwb.jpg", "ingles")
    canciones.push(cancion6)
    localStorage.setItem("canciones", JSON.stringify(canciones));

    let cancion7 = new Cancion(7, "Inconsciente colectivo", "Charly García", "Melancólico", "https://res.cloudinary.com/dhvgi2cmq/video/upload/v1690235760/pinkify/canciones/inconsciente_wpe8ga.mp3", "https://res.cloudinary.com/dhvgi2cmq/image/upload/v1690235694/pinkify/portadas/inconsciente_hentns.jpg", "espaniol")
    canciones.push(cancion7)
    localStorage.setItem("canciones", JSON.stringify(canciones));

    let cancion8 = new Cancion(8, "Uno los dos", "Miranda, Emilia Mernes", "Triste", "https://res.cloudinary.com/dhvgi2cmq/video/upload/v1690235762/pinkify/canciones/unolosdos_uudc3v.mp3", "https://res.cloudinary.com/dhvgi2cmq/image/upload/v1690235694/pinkify/portadas/unolosdos_rxwhyl.avif", "espaniol")
    canciones.push(cancion8)
    localStorage.setItem("canciones", JSON.stringify(canciones));

    let cancion9 = new Cancion(9, "I'm Not In Love", "10cc", "Triste", "https://res.cloudinary.com/dhvgi2cmq/video/upload/v1690235760/pinkify/canciones/imnot_jk3zmx.mp3", "https://res.cloudinary.com/dhvgi2cmq/image/upload/v1690235694/pinkify/portadas/imnot_jdvjdq.jpg", "ingles")
    canciones.push(cancion9)
    localStorage.setItem("canciones", JSON.stringify(canciones));

    let cancion10 = new Cancion(10, "La Incondicional", "Luis Miguel", "Romántico", "https://res.cloudinary.com/dhvgi2cmq/video/upload/v1690236602/pinkify/canciones/laincondicional_rfdfhk.webm", "https://res.cloudinary.com/dhvgi2cmq/image/upload/v1690236614/pinkify/portadas/laincond_hwrh8o.jpg", "espaniol")
    canciones.push(cancion10)
    localStorage.setItem("canciones", JSON.stringify(canciones));

    let cancion11 = new Cancion(11, "How Deep is Your Love", "Bee Gees", "Romántico", "https://res.cloudinary.com/dhvgi2cmq/video/upload/v1690235760/pinkify/canciones/howdeep_qkexlw.mp3", "https://res.cloudinary.com/dhvgi2cmq/image/upload/v1690235694/pinkify/portadas/howdeep_bhpmjl.jpg", "ingles")
    canciones.push(cancion11)
    localStorage.setItem("canciones", JSON.stringify(canciones));

}