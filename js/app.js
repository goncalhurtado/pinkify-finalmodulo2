// INICIAR SESION

const usuariosString = localStorage.getItem('usuarios');
const usuariosRecuperados = JSON.parse(usuariosString);

// Ahora, usuariosRecuperados contendrá el array de objetos original
console.log(usuariosRecuperados);

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
        // si existe el usuario y lo encuentra
})