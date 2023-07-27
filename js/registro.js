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
    let error = document.getElementById("error-registro")
    error.innerHTML = "";



    if (nombre === "" || email === "" || apellido === "" || password === "") {
        error.innerHTML = `todos los campos son obligatorios`;
        error.classList.add("text-bg-danger")
        error.classList.remove("d-none")
        setTimeout(() => {
            error.classList.add("d-none")
            error.classList.remove("text-bg-danger")
        }, 2000)
        return;
    }

    //validacion del mail
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;
    let emailValidado = regex.test(email); //esto devuelve true o false

    if (!emailValidado) {
        error.innerHTML = `El Mail no es correcto`;
        error.classList.add("text-bg-danger")
        error.classList.remove("d-none")
        setTimeout(() => {
            error.classList.add("d-none")
            error.classList.remove("text-bg-danger")
        }, 4000)
        return;
    }

    let regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[^\s]{8,}$/
    let passwordvalidado = regexContraseña.test(password);

    if (!passwordvalidado) {
        error.innerHTML = `La contraseña debe tener al menos una letra mayúscula y minúscula, un número. un caracter especial y debe tener mas de 8 caracteres`;
        error.classList.add("text-bg-danger")
        error.classList.remove("d-none")
        document.querySelector("#password-registro").focus();
        setTimeout(() => {
            error.classList.add("d-none")
            error.classList.remove("text-bg-danger")
        }, 5000)
        return;
    }

    let validarUsuario = usuarios.find((usuario) => {
        return usuario.email === email
    });
    if (validarUsuario != undefined) {

        error.innerHTML = `El Mail ya se encuentra registrado`;
        error.classList.add("text-bg-danger")
        error.classList.remove("d-none")
        formSignUp.reset()
        document.querySelector("#email-registro").focus();
        setTimeout(() => {
            error.classList.add("d-none")
            error.classList.remove("text-bg-danger")
        }, 4000)
        return;
    }

    let nuevoUsuario = new Usuario(id, nombre, apellido, email, password)
    usuarios.push(nuevoUsuario)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    formSignUp.reset()
    alert(`usuario registrado correctamente`);
    window.location.href = "../index.html"
})