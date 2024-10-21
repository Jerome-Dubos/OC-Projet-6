const logo = document.querySelector(".logo")
const projets = document.querySelector(".projets")
const contact = document.querySelector(".contact")
const worksURL = "http://localhost:5678/api/works"
const categoriesURL = "http://localhost:5678/api/categories"
const gallery = document.querySelector(".gallery")
const login = document.querySelector(".login")
let works = ""
let categories = ""


async function getCategories() {
    const response = await fetch(categoriesURL)
    return response.json()
}
async function getWorks() {
    const response = await fetch(worksURL)
    return response.json()
}

login.addEventListener("click", () => {
    document.location = "login.html"
})

projets.addEventListener("click", () => {
    document.location = "index.html"
})

logo.addEventListener("click", () => {
    document.location = "index.html"
})

contact.addEventListener("click", () => {
    document.location = "index.html#contact"
})