//REGISTRARSE
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const formSignUp = document.querySelector("#registro")

class Usuario {
    constructor(id, nombre, apellido, email, password, isLogged = false) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.isLogged = isLogged;
    }
}

let idRandom = () => {
    if (usuarios.length < 0) {
        return usuarios[usuarios.length - 1].id + Math.random(Math.round() * 100);
    } else {
        return (Math.round(Math.random() * 100))
    }
}

//VALIDACION

formSignUp.addEventListener("submit", (e) => {
    e.preventDefault()
    let id = idRandom();
    let nombre = document.querySelector("#nombre-registro").value;
    let apellido = document.querySelector("#apellido-registro").value;
    let email = document.querySelector("#email-registro").value;
    let password = document.querySelector("#password-registro").value;
    let error = document.querySelector(".error")
    error.innerHTML = "";

    //validacion del mail
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;
    let emailValidado = regex.test(email); //esto devuelve true o false

    if (nombre === "" || email === "" || apellido === "" || password === "") {
        error.innerHTML = `todos los campos son obligatorios`;
        error.style.display = "block"
        setTimeout(() => {
            error.style.display = "none"
        }, 2000)
        return;
    }
    //Validar mail con expresión regular

    if (!emailValidado) {
        error.innerHTML = `todos los campos son obligatorios`;
        error.style.display = "block"
        setTimeout(() => {
            error.style.display = "none"
        }, 4000)
        return;
    }

    //Validar si el usuario ya existe

    let validarUsuario = usuarios.find((usuario) => {
        return usuario.email === email
    });
    if (validarUsuario != undefined) {
        alert(`usuario ya existe`)
        formSignUp.reset()
        document.querySelector("#nombre-registro").focus();
        return;
    }

    let nuevoUsuario = new Usuario(id, nombre, apellido, email, password)
    usuarios.push(nuevoUsuario)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    formSignUp.reset()
    alert(`usuario registrado correctamente`);
    window.location.href = "../index.html"
})