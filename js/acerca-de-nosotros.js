let formAcerca = document.getElementById("formAcerca");

formAcerca.addEventListener("submit", (e) => {
    e.preventDefault()
    let nombre = document.getElementById("nombre-acerca").value;
    let email = document.getElementById("mail-acerca").value;
    let perfil = document.getElementById("perfil-acerca").value;
    let texto = document.getElementById("texto-acerca").value;
    let error = document.getElementById("error-acerca");
    error.innerHTML = "";

    if (nombre === "" || email === "" || perfil === "" || texto == "") {
        error.innerHTML = "Todos los campos son obligatorios"
        error.classList.add("text-bg-danger")
        error.classList.remove("d-none")
        setTimeout(() => {
            error.classList.add("d-none")
        }, 4000)
        return;
    }

    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;
    let emailValidado = regex.test(email);

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
    error.innerHTML = `Gracias por su mensaje! Estamos en contacto por cualquier consulta`;
    error.classList.remove("text-bg-danger")
    error.classList.add("text-bg-success")
    error.classList.remove("d-none")
    setTimeout(() => {
        error.classList.add("d-none")
        window.location.reload();
    }, 4000)


})