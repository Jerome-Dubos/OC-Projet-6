const tokenConnected = window.sessionStorage.getItem("token")
const tokenAdmin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcyODU3MDAyMCwiZXhwIjoxNzI4NjU2NDIwfQ.E8FCcdy1z4yBmQtAQW0czCAuRyZQdDa0hNKqX8x-Aa0"
const header = document.querySelector("header")
const editionIcon = `<i class="fa-solid fa-pen-to-square"></i>`
const banner = document.querySelector(".banner")
const mesProjets = document.querySelector(".mesProjets")


if (tokenConnected == tokenAdmin) {
    interfaceLoggedIn()
    logout()
}

function openModale() {
        console.log("coucou");
}

function interfaceLoggedIn() {
    login.innerHTML = "Logout"
    banner.classList.remove("editDeleted")
    createBannerLoggedIn()
    createModifierButton()
}

function createBannerLoggedIn() {
    const bannerLoggedIn = document.createElement("div")
    const textBanner = document.createElement("p")
    bannerLoggedIn.classList.add("edit")
    bannerLoggedIn.innerHTML = `${editionIcon}Mode édition`
    let insertedNode = header.insertBefore(bannerLoggedIn, banner)
    bannerLoggedIn.appendChild(textBanner)
}

function createModifierButton() {
    const modifierButton = document.createElement("p")
    modifierButton.classList.add("modifier")
    modifierButton.innerHTML = `${editionIcon}Modifier`
    mesProjets.appendChild(modifierButton)
    modifierButton.addEventListener("click", () => {
        openModale()
    })
}

function logout() {
    login.addEventListener("click", () => {
        window.sessionStorage.clear()
        document.location = "index.html"
    })
}
