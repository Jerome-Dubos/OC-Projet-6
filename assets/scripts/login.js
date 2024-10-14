function initLogin() {
    const formLogin = document.querySelector(".connexion")
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault()
        const connexionUser = {
            email: email.value,
            password: password.value
        }
        const log = JSON.stringify(connexionUser)
        fetch("http://localhost:5678/api/users/login/", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: log
        }).then(function (response) {
            let status = response.status
            if (status == 200) {
               response.json().then(function(data) {
                sessionStorage.setItem("token", data.token)
                location.href = "index.html"
               })
            } if (status == 401) {
                errorLogin("mot de passe")
            } if (status == 404) {
                errorLogin("e-mail")
            }
        })
    })
}

function errorLogin(champ) {
    const errorMessage = document.createElement("p")
    formLogin.appendChild(errorMessage)
    errorMessage.innerHTML = `Votre ${champ} est incorrect. Veuillez réessayer.`
    setTimeout(() => {formLogin.removeChild(errorMessage)}, 3500);
}


initLogin()