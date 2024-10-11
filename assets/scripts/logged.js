if (tokenConnected == tokenAdmin) {
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
    let insertedNode = header.insertBefore(bannerLoggedIn, banner)
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
        let figures = []
        figures.push(newFigure)
        newIcon.addEventListener('click', (event) => {
            console.log(figures[0]);
            // fetch(`http://localhost:5678/api/works/${figures[0]}`, {
            //     method: "DELETE",
            //     headers: "accept: */*",
            // })
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

validatePhoto.addEventListener("click", (e) => {
    e.preventDefault()
    if (titlePhoto.value !== "" && (categoryPhoto.value !== "")) {
        console.log("marche");
    }else errorAddPhoto()
})

function errorAddPhoto() {
    const errorMessage = document.createElement("p")
    errorMessage.classList.add("errorMessage")
    formModale.appendChild(errorMessage)
    errorMessage.innerHTML = "Vous avez oublié de remplir un ou plusieurs champ. Veuillez recommencer."
    setTimeout(() => { formModale.removeChild(errorMessage) }, 3500);
}

categoryPhoto.addEventListener("change", () => {
    if (titlePhoto.value !== "" && (categoryPhoto.value !== "")) {
        validatePhoto.classList.add("activeBtn")
    } else {
        validatePhoto.classList.remove("activeBtn")
    }
})