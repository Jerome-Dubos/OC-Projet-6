const filters = document.querySelector(".filters")
const gallery = document.querySelector(".gallery")
const galleryModale = document.querySelector(".galleryModale")
const login = document.querySelector(".login")
const logo = document.querySelector(".logo")
const projets = document.querySelector(".projets")
const contact = document.querySelector(".contact")
const worksURL = "http://localhost:5678/api/works"
const categoriesURL = "http://localhost:5678/api/categories"
const formLogin = document.querySelector(".connexion")
const email = document.getElementById("email")
const password = document.getElementById("password")
const tokenConnected = window.sessionStorage.getItem("token")
const tokenAdmin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcyODU3MDAyMCwiZXhwIjoxNzI4NjU2NDIwfQ.E8FCcdy1z4yBmQtAQW0czCAuRyZQdDa0hNKqX8x-Aa0"
const header = document.querySelector("header")
const editionIcon = `<i class="fa-solid fa-pen-to-square"></i>`
const deleteIcon = `<i class="fa-solid fa-trash-can"></i>`
const banner = document.querySelector(".banner")
const mesProjets = document.querySelector(".mesProjets")
const modaleBackground = document.querySelector(".modaleBackground")
const closeCross = document.querySelector(".fa-x")
const alternativeBtn = document.querySelector(".alternativeBtn")
const firstModale = document.querySelector(".firstModale")
const arrowLeft = document.querySelector(".fa-arrow-left")
const secondModale = document.querySelector(".secondModale")
const titlePhoto = document.getElementById("titre")
const categoryPhoto = document.getElementById("category")
const validatePhoto = document.querySelector(".secondModale button")
const formModale = document.querySelector(".secondModale .form")
const myFile = document.getElementById("myFile")
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
