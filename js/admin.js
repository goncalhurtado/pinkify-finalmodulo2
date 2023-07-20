//CREACION DEL USUARIO ADMIN

let usuariosAdmin = JSON.parse(localStorage.getItem("usuarios-admin")) || [];

class UsuarioAdmin {
    constructor(id, nombre, apellido, email, password, isLogged = false, isAdmin = true) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.isLogged = isLogged;
        this.isAdmin = isAdmin;
    }
}

let nuevoUsuario = new UsuarioAdmin("1", "Gonzalo", "Hurtado", "admin@pinkify.com", "admin123")
usuariosAdmin.push(nuevoUsuario)
localStorage.setItem("usuariosAdmin", JSON.stringify(usuariosAdmin));

// INICIO SESION ADMIN


const usuariosString = localStorage.getItem('usuariosAdmin');
const usuariosRecuperados = JSON.parse(usuariosString);


const formLogin = document.querySelector("#login")


formLogin.addEventListener("submit", (e) => {
    e.preventDefault()
    let email = document.getElementById("email-login").value;
    let password = document.getElementById("password-login").value;
    const errorLogin = document.getElementById(".error")
    error.innerHTML = "";
    //validar si existe el usuario con ese mail
    if (email === "" || password === "") {
        error.innerHTML = "todos los campos son obligatorios"
        error.style.display = "block"
        setTimeout(() => {
            error.style.display = "none"
        }, 2000)
        return;
    }
    let validarEmail = usuariosRecuperados.find((usuario) => {
        return usuario.email === email && usuario.password === password
    });

    if (validarEmail === undefined) {
        alert("usuario o contraseña son incorrectos")
        formLogin.reset() //me limpia el formulario
        document.getElementById("email-login").focus()
        return;
    }
    validarEmail.isLogged = true;
    localStorage.setItem("usuarioLogueadoAdmin", JSON.stringify(validarEmail))
    formLogin.reset();
    alert("usuario logueado con exito")
    window.location.reload();
    // si existe el usuario y lo encuentra
})

const usuarioLogueadoString = localStorage.getItem(`usuarioLogueadoAdmin`)
const usuarioLogueadoAdmin = JSON.parse(usuarioLogueadoString);

if (usuarioLogueadoAdmin === null) {
    console.log(`no hay usuario admin logueado`);

} else {
    console.log(`esta logueado el usuario ${usuarioLogueadoAdmin.nombre}`);

}