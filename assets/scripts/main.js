const filters = document.querySelector(".filters")
const gallery = document.querySelector(".gallery")
const works = "http://localhost:5678/api/works"
const categories = "http://localhost:5678/api/categories"



function filterObjects() {
    fetch(works).then((response) => {
        response.json().then((data) => {
            const categoryFilter = data.filter(function (data) {
                return data.categoryId == 1
            })
            console.log(categoryFilter)
            categoryFilter.forEach(e => {                     
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

function filterAppartments() {
    fetch(works).then((response) => {
        response.json().then((data) => {
            const categoryFilter = data.filter(function (data) {
                return data.categoryId == 2
            })
            console.log(categoryFilter)
            categoryFilter.forEach(e => {
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

function filterHotels() {
    fetch(works).then((response) => {
        response.json().then((data) => {
            const categoryFilter = data.filter(function (data) {
                return data.categoryId == 3
            })
            console.log(categoryFilter)
            categoryFilter.forEach(e => {
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

function removeAllFilters() {
    fetch(works).then((response) => {
        response.json().then((data) => {
            const categoryFilter = data.filter(function (data) {
                return data.categoryId !== 50
            })
            console.log(categoryFilter)
        })
    })
}

function addFilterTous() {
    const filterTous = document.createElement("button")
    filters.appendChild(filterTous)
    filterTous.classList.add("tous", "button", "buttonSelected")
    filterTous.innerText = "Tous"
}

function portfolioFilters() {
    addFilterTous()
    fetch(categories).then((response) => {
        response.json().then((data) => {
            data.forEach(e => {
                const newFilter = document.createElement("button")
                filters.appendChild(newFilter)
                newFilter.classList.add("button")
                newFilter.innerText = e.name
                if (newFilter.innerText === "Objets") {
                    newFilter.addEventListener('click', () => {
                        document.querySelector(".buttonSelected").classList.remove("buttonSelected")
                        newFilter.classList.add("buttonSelected")
                        filterObjects()
                    })
                } if (newFilter.innerText === "Appartements") {
                    newFilter.addEventListener('click', () => {
                        document.querySelector(".buttonSelected").classList.remove("buttonSelected")
                        newFilter.classList.add("buttonSelected")
                        filterAppartments()
                    })
                } if (newFilter.innerText === "Hotels & restaurants") {
                    newFilter.addEventListener('click', () => {
                        document.querySelector(".buttonSelected").classList.remove("buttonSelected")
                        newFilter.classList.add("buttonSelected")
                        filterHotels()
                    })
                } const filterTous = document.querySelector(".tous")
                filterTous.addEventListener('click', () => {
                    document.querySelector(".buttonSelected").classList.remove("buttonSelected")
                    filterTous.classList.add("buttonSelected")
                    removeAllFilters()
                })
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

