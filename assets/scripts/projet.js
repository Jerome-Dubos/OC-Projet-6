const filters = document.querySelector(".filters")

async function displayWorks(data) {
    gallery.innerHTML = ""
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
}

function filterWorks(categoryId) {
    const categoryFilter = works.filter(function (data) {
        return data.categoryId == categoryId
    })
    displayWorks(categoryFilter)
}

function addFilterTous() {
    const filterTous = document.createElement("button")
    filters.appendChild(filterTous)
    filterTous.classList.add("tous", "button", "buttonSelected")
    filterTous.innerText = "Tous"
    filterTous.addEventListener("click", () => {
        displayWorks(works)
    })
}

function createFilters(data) {
    categories.forEach(category => {
        const newFilter = document.createElement("button")
        filters.appendChild(newFilter)
        newFilter.classList.add("button")
        newFilter.innerText = category.name
        newFilter.addEventListener("click", (e) => {
            filterWorks(category.id)
            document.querySelector(".buttonSelected").classList.remove("buttonSelected")
            newFilter.classList.add("buttonSelected")
        })
    })
}

function addFilters() {
    addFilterTous()
    const filterTous = document.querySelector(".tous")
    filterTous.addEventListener('click', () => {
        document.querySelector(".buttonSelected").classList.remove("buttonSelected")
        filterTous.classList.add("buttonSelected")
    })
    createFilters()
}

async function init() {
    works = await getWorks()
    categories = await getCategories()
    await displayWorks(works)
    addFilters()
}


init()