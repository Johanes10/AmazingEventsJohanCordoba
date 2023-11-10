export let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"

const contenedor = document.getElementById("contenedorCards")
const checkbox = document.getElementById("contenedorCheckbox")
const upcoming = document.getElementById("contenedorUpcomingEvents")
const pastEvents = document.getElementById("contenedorPastEvents")


export function pintarChecks(arrayCategorys) {
    let categorys = []
    categorys = Array.from(new Set(arrayCategorys.map(evento => evento.category)))
    categorys.forEach(categoria => {
        let divCheckbox = document.createElement("div")
        divCheckbox.classList.add("form-check")
        divCheckbox.innerHTML = `
    <input class="form-check-input" type="checkbox" id=${categoria} value="${categoria}">
    <label class="form-check-label" for=${categoria}>${categoria}</label>
    `;
        contenedorCheckbox.appendChild(divCheckbox)
    })
}
export function filtrarEventos(arrayEvents) {
    let checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value)

    // let usuariosFiltrados = []
    if (checked.length > 0) {
        return arrayEvents.filter(evento => checked.includes(evento.category))
    } return arrayEvents
}
function filtrarPorTexto(arrayEvents) {
    return arrayEvents.filter(evento => evento.name.toLowerCase().includes(buscador.value.toLowerCase()))
}
export function crearCard(arrayEvents) {
    if (arrayEvents.length == 0) {
        contenedor.innerHTML = `<h2>No se encontro su busqueda</h2>`
    } else {
        contenedor.innerHTML = ""
        arrayEvents.forEach(evento => {
            const card = document.createElement("div")
            card.classList.add("card")
            card.style.width = "18rem"
            card.innerHTML = `<img src=${evento.image} class="card-img-top h-50" alt="Books Event">
                                      <div class="card-body">
                                      <h5 class="card-title">${evento.name}</h5 >
                                      <p class="card-text text-truncate">${evento.description}</p>
                                      <div class="d-flex justify-content-between">
                                      <p>$${evento.price}</p>
                                      <a href="./details.html?name=${evento.name}" class="btn btn-outline-dark">Details</a>`
            console.log(card);
            contenedor.appendChild(card);
        })
    }
}
export function crearCardUpcoming(arrayEvents) {
    if (arrayEvents.length === 0) {
        upcoming.innerHTML = `<h2>No se encontró su búsqueda</h2>`;
    } else {
        upcoming.innerHTML = "";
        arrayEvents.forEach(evento => {
            const eventDate = new Date(evento.date); // Convertir la fecha a un objeto Date

            const comparisonDate = new Date("2023-01-01"); // Fecha de comparación

            if (eventDate >= comparisonDate) {
                const card = document.createElement("div");
                card.classList.add("card");
                card.style.width = "18rem";
                card.innerHTML = `
            <img src=${evento.image} class="card-img-top h-50" alt="Books Event">
            <div class="card-body">
              <h5 class="card-title">${evento.name}</h5>
              <p class="card-text text-truncate">${evento.description}</p>
              <div class="d-flex justify-content-between">
                <p>$${evento.price}</p>
                <a href="./details.html?name=${evento.name}" class="btn btn-outline-dark">Details</a>
              </div>
            `;
                upcoming.appendChild(card);
            }
        });
    }
}
export function crearCardPast(arrayEvents) {
    if (arrayEvents.length === 0) {
        contenedorPastEvents.innerHTML = `<h2>No se encontró su búsqueda</h2>`;
    } else {
        contenedorPastEvents.innerHTML = "";
        arrayEvents.forEach(evento => {
            const eventDate = new Date(evento.date);

            const comparisonDate = new Date("2023-01-01");

            if (eventDate < comparisonDate) {
                const card = document.createElement("div");
                card.classList.add("card");
                card.style.width = "18rem";
                card.innerHTML = `
            <img src=${evento.image} class="card-img-top h-50" alt="Books Event">
            <div class="card-body">
              <h5 class="card-title">${evento.name}</h5>
              <p class="card-text text-truncate">${evento.description}</p>
              <div class="d-flex justify-content-between">
                <p>$${evento.price}</p>
                <a href="./details.html?name=${evento.name}" class="btn btn-outline-dark">Details</a>
              </div>
            `;
                contenedorPastEvents.appendChild(card);
            }
        });
    }
}


export function superFiltro(arrayEvents) {
    let filtro1 = filtrarEventos(arrayEvents)
    let filtro2 = filtrarPorTexto(filtro1)
    crearCard(filtro2)
}
buscador.addEventListener("keyup", () => {
    superFiltro(arrayEvent)

})
checkbox.addEventListener('change', () => {
    superFiltro(arrayEvent)
})