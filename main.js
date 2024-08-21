
const $ = document;
const containerProducts = $.querySelector('#containerProducts')

fetch('http://localhost:3000/api/productos')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

const newCard = ({Titulo, Precio, img, id}) => {
    return `
    <div class="trip__grid" id=${id}>
        <div class="trip__card">
            <img src="${img}" alt="trip" />
            <div class="trip__details">
            <p>${Titulo}</p>
                <div class="booking__price">
                    <div class="price">${Precio}</div>
                    <button class="book__now">Details</button>
                </div>
            </div>
        </div>
    </div>
    `
}

const renderCards = (array) => {
    containerProducts.innerHTML += ''
    array.map(item => {
        containerProducts.innerHTML += newCard(item)
    })
}

const handleDetailCard = (id) => {
    window.location = `./details/details1.html?idproducto=${id}`
}

const addClickDetailCard = () => {
    const cards = document.querySelectorAll('.trip__grid')
    console.log(cards)
    cards.forEach((trip__grid) => trip__grid.addEventListener('click', () => {
        handleDetailCard(trip__grid.id)
    }))
}

const getAll = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/productos')
        if (response.status !== 200) throw new Error('Error en la solicitud')
        const data = await response.json()
        renderCards(data)
    } catch (error) {
        alert('Error ' + error)
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await getAll()
    addClickDetailCard()
})


