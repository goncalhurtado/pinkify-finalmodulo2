// INICIAR SESION

const usuariosString = localStorage.getItem('usuarios');
const usuariosRecuperados = JSON.parse(usuariosString);


const formLogin = document.querySelector("#login")


formLogin.addEventListener("submit", (e) => {
    e.preventDefault()
    let email = document.getElementById("#email-login").value;
    let password = document.getElementById("#password-login").value;
    const errorLogin = document.querySelector("error-login")
        //validar si existe el usuario con ese mail
    if (email === "" || password === "") {
        errorLogin.innerHTML = "todos los campos son obligatorios"
        errorLogin.style.display = "block"
        setTimeout(() => {
            error.style.display = "none"
        }, 4000)
        return;
    }
    let validarEmail = usuariosRecuperados.find((usuario) => {
        return usuario.email === email && usuario.password === password
    });

    if (validarEmail === undefined) {
        alert("usuario o contraseña son incorrectos")
        formLogin.reset() //me limpia el formulario
        document.getElementById("#email-login").focus()
        return;
    }
    validarEmail.isLogged = true;
    localStorage.setItem("usuarioLogueado", JSON.stringify(validarEmail))
    formLogin.reset();
    alert("usuario logueado con exito")
    window.location.reload();
    // si existe el usuario y lo encuentra
})


//LOG OUT

const usuarioLogueadoString = localStorage.getItem(`usuarioLogueado`)
const usuarioLogueado = JSON.parse(usuarioLogueadoString);
let usuarioNavbar = document.getElementById("usuario-navbar");
let iniciarSesion = document.getElementById("iniciar-sesion")

//ver si esta logueado

if (usuarioLogueado === null) {
    console.log(`no hay usuario logueado`);
    usuarioNavbar.classList.add("d-none")
} else {
    console.log(`esta logueado el usuario ${usuarioLogueado.nombre}`);
    let nombreNavbar = document.getElementById("nombre-logueado");
    nombreNavbar.innerHTML = `${usuarioLogueado.nombre}`
    iniciarSesion.classList.add("d-none")
}

// boton salir
let logOut = document.getElementById("log-out");
let nombreNavbar = document.getElementById("nombre-navbar")

logOut.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem('usuarioLogueado');
    iniciarSesion.classList.remove("d-none")
    usuarioNavbar.classList.remove("d-none")
    usuarioNavbar.classList.add("d-none")

    // Para recargar la página
    window.location.reload();
})