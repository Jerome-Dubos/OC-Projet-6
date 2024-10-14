if (tokenConnected !== null) {
    interfaceLoggedIn()
    logout()
}

function interfaceLoggedIn() {
    login.innerHTML = "logout"
    banner.classList.remove("editDeleted")
    createBannerLoggedIn()
    createModifierButton()
}

function createBannerLoggedIn() {
    const bannerLoggedIn = document.createElement("div")
    const textBanner = document.createElement("p")
    bannerLoggedIn.classList.add("edit")
    bannerLoggedIn.innerHTML = `${editionIcon}Mode édition`
    header.insertBefore(bannerLoggedIn, banner)
    bannerLoggedIn.appendChild(textBanner)
}

function createModifierButton() {
    const modifierButton = document.createElement("p")
    modifierButton.classList.add("modifier")
    modifierButton.innerHTML = `${editionIcon}Modifier`
    mesProjets.appendChild(modifierButton)
    modifierButton.addEventListener("click", () => {
        modaleBackground.classList.add("active")
        firstModale.classList.add("active")
    })
}

function logout() {
    login.addEventListener("click", () => {
        window.sessionStorage.clear()
        document.location = "index.html"
    })
}

//Gestion de la modale
//Général modale
function cacherModale() {
    modaleBackground.classList.remove("active")
    arrowLeft.classList.remove("active")
    secondModale.classList.remove("active")
}

modaleBackground.addEventListener("click", (event) => {
    if (event.target === modaleBackground) {
        cacherModale()
    }
})

closeCross.addEventListener("click", () => {
    cacherModale()
})

arrowLeft.addEventListener("click", () => {
    arrowLeft.classList.remove("active")
    secondModale.classList.remove("active")
    firstModale.classList.add("active")
})

//First modale
async function displayWorksModale(data) {
    galleryModale.innerHTML = ""
    data.forEach(e => {
        const newFigure = document.createElement("figure")
        const newImage = document.createElement("img")
        const newIcon = document.createElement("div")
        newIcon.classList.add("bin")
        galleryModale.appendChild(newFigure)
        newFigure.appendChild(newImage)
        newFigure.appendChild(newIcon)
        newImage.src = e.imageUrl
        newIcon.innerHTML = deleteIcon
        newIcon.addEventListener('click', (event) => {
            fetch(`http://localhost:5678/api/works/${e.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + tokenConnected
                }
            })
            initFirstModale()
        })
    })
}

alternativeBtn.addEventListener("click", () => {
    firstModale.classList.remove("active")
    secondModale.classList.add("active")
    arrowLeft.classList.add("active")
})

async function initFirstModale() {
    works = await getWorks()
    await displayWorksModale(works)
}

initFirstModale()

//SecondModale
validatePhoto.addEventListener("click", (e) => {
    e.preventDefault()
    if (titlePhoto.value !== "" && (categoryPhoto.value !== "")) {
        cacherModale()
        cleanForm()
        displayWorks(works)
    } else errorAddPhoto()
})

function cleanForm() {
    titlePhoto.value = ""
    categoryPhoto.value = ""
}

function showPhoto() {
    let photo = document.querySelector("input[type=file").files[0]
    let newPhoto = document.createElement("img")
    newPhoto.src = photo.src
    seePhoto.innerHTML = ""
    seePhoto.appendChild(newPhoto)
    console.log(photo);
}

function errorAddPhoto() {
    const errorMessage = document.createElement("p")
    errorMessage.classList.add("errorMessage")
    formModale.appendChild(errorMessage)
    errorMessage.innerHTML = "Vous avez oublié de remplir un ou plusieurs champ. Veuillez recommencer."
    setTimeout(() => { formModale.removeChild(errorMessage) }, 3500);
}

myFile.addEventListener("change", () => {
    showPhoto()    
})

function validationForm() {
    if (titlePhoto.value !== "" && (categoryPhoto.value !== "")) {
        validatePhoto.classList.add("activeBtn")
    } else {
        validatePhoto.classList.remove("activeBtn")
    }
}

titlePhoto.addEventListener("change", () => {
    validationForm()
})

categoryPhoto.addEventListener("change", () => {
    validationForm()
})

async function displayCategories(data) {
    data.forEach(e => {
        const newOption = document.createElement("option")
        newOption.value = e.name
        newOption.innerText = e.name
        categoryPhoto.appendChild(newOption)
    })
}

async function initSecondModale() {
    categories = await getCategories()
    await displayCategories(categories)
}

initSecondModale()