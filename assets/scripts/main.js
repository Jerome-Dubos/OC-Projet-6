const gallery = document.querySelector(".gallery")
const works = "http://localhost:5678/api/works"



function getWorksData() {
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


getWorksData()




