const $ = document;
const containerProducts = $.querySelector('#containerProducts3')

fetch('http://localhost:3000/api/Free')
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

const renderCards3 = (array) => {
    containerProducts.innerHTML += ''
    array.map(item => {
        containerProducts.innerHTML += newCard2(item)
    })
}

const handleDetailCard3 = (id) => {
    window.location = `./details/details3.html?idproducto=${id}`
}

const addClickDetailCard3 = () => {
    const cards = document.querySelectorAll('.trip__grid')
    console.log(cards)
    cards.forEach((trip__grid) => trip__grid.addEventListener('click', () => {
        handleDetailCard3(trip__grid.id)
    }))
}

const getProducts3 = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/Free')
        if (response.status !== 200) throw new Error('Error en la solicitud')
        const data = await response.json()
        renderCards3(data)
    } catch (error) {
        alert('Error ' + error)
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await getProducts3()
    addClickDetailCard3()
})