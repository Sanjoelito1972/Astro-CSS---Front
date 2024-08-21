
const $ = document;
const containerProducts = $.querySelector('#containerProducts2')

fetch('http://localhost:3000/api/AllProducts')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

const newCard2 = ({Titulo, img, id, link, description}) => {
    return `
    <div class="trip__grid" id=${id}>
        <div class="trip__card">
            <img src="${img}" alt="trip" />
            <div class="trip__details">
            <p>${Titulo}</p>
                <div class="booking__price">
                    <p class="description">${description}</p>
                    <a href="${link}"><button class="btn4">Code</button></a>
                </div>
            </div>
        </div>
    </div>
    `
}

const renderCards2 = (array) => {
    containerProducts.innerHTML += ''
    array.map(item => {
        containerProducts.innerHTML += newCard2(item)
    })
}

const handleDetailCard2 = (id) => {
    window.location = `./details/details2.html?idproducto=${id}`
}

const getProducts2 = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/AllProducts')
        if (response.status !== 200) throw new Error('Error en la solicitud')
        const data = await response.json()
        renderCards2(data)
    } catch (error) {
        alert('Error ' + error)
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await getProducts2()
    addClickDetailCard2()
})