const email = document.getElementById("email")
const password = document.getElementById("password")


function ajoutListenerLogin() {
    const formLogin = document.querySelector(".connexion")
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault()
        const connexionUser = {
            email: email.value,
            password: password.value
        }
        const chargeUtile = JSON.stringify(connexionUser)
        fetch("http://localhost:5678/api/users/login/", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: chargeUtile
        }).then(function(response) {
            console.log(response.body);  
        })
    })
}



ajoutListenerLogin()

