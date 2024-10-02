const filters = document.querySelector(".filters")
const gallery = document.querySelector(".gallery")
const works = "http://localhost:5678/api/works"
const categories = "http://localhost:5678/api/categories"



function portfolioFilters() {
    const filterAll = document.createElement("button")
    filters.appendChild(filterAll)
    filterAll.innerText = "Tous"
    fetch(categories).then((response) => {
        response.json().then((data) => {
            data.forEach(e => {
                const newFilter = document.createElement("button")
                filters.appendChild(newFilter)
                newFilter.innerText = e.name
            })
        })
    })
}

function portfolioGallery() {
    fetch(works).then((response) => {
        response.json().then((data) => {
            data.forEach(e => {
                const newFigure = document.createElement("figure")
                const newImage = document.createElement("img")
                const NewCaption = document.createElement("figcaption")
                gallery.appendChild(newFigure)
                newFigure.appendChild(newImage)
                newFigure.appendChild(NewCaption)
                newImage.src = e.imageUrl
                NewCaption.innerHTML = e.title
            })
        })
    })
}

portfolioFilters()
portfolioGallery()




