// INICIAR SESION

const usuariosString = localStorage.getItem('usuarios');
const usuariosRecuperados = JSON.parse(usuariosString);


const formLogin = document.querySelector("#login")


formLogin.addEventListener("submit", (e) => {
    e.preventDefault()
    let email = document.getElementById("#email-login").value;
    let password = document.getElementById("#password-login").value;
    let errorLogin = document.getElementById("error-login")

    if (email === "" || password === "") {
        errorLogin.innerHTML = "todos los campos son obligatorios"
        errorLogin.classList.remove("d-none")
        errorLogin.classList.add("text-bg-danger")
        setTimeout(() => {
            errorLogin.classList.add("d-none")
            errorLogin.classList.remove("text-bg-danger")
        }, 3000)
        return;
    }
    let validarEmail = usuariosRecuperados.find((usuario) => {
        return usuario.email === email && usuario.password === password
    });

    if (validarEmail === undefined) {
        // let errorLogin = document.getElementById("error-login")
        errorLogin.innerHTML = "Mail o contraseña incorrectos!"
        errorLogin.classList.remove("d-none")
        errorLogin.classList.add("text-bg-danger")
        formLogin.reset()
        setTimeout(() => {
            errorLogin.classList.add("d-none")
            errorLogin.classList.remove("text-bg-danger")
        }, 3000)
        document.getElementById("#email-login").focus()
        return;
    }
    validarEmail.isLogged = true;
    localStorage.setItem("usuarioLogueado", JSON.stringify(validarEmail))
    formLogin.reset();
    errorLogin.classList.remove("d-none")
    errorLogin.classList.remove("text-bg-danger", "rounded-2", "ps-3", "pe-3")
    errorLogin.classList.add("text-bg-success", "rounded-2", "ps-3", "pe-3")
    errorLogin.innerHTML = "Has iniciado sesión con éxito."
    setTimeout(() => {
        window.location.reload();
    }, 2000)

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
    window.location.reload();
})