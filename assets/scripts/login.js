function ajoutListenerLogin() {
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
                window.sessionStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcyODU3MDAyMCwiZXhwIjoxNzI4NjU2NDIwfQ.E8FCcdy1z4yBmQtAQW0czCAuRyZQdDa0hNKqX8x-Aa0")
                document.location = "index.html"
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


ajoutListenerLogin()

