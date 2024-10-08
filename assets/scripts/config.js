const filters = document.querySelector(".filters")
const gallery = document.querySelector(".gallery")
const login = document.querySelector(".login")
const logo = document.querySelector(".logo")
const projets = document.querySelector(".projets")
const contact = document.querySelector(".contact")
const worksURL = "http://localhost:5678/api/works"
const categoriesURL = "http://localhost:5678/api/categories"
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