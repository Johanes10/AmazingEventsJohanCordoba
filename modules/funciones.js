export const urlApi = "https://mindhub-xj03.onrender.com/api/amazing"

const contenedor = document.getElementById("contenedorCards")
const checkbox = document.getElementById("contenedorCheckbox")
const upcoming = document.getElementById("contenedorUpcomingEvents")
const buscador = document.getElementById("buscador")
const pastEvents = document.getElementById("contenedorPastEvents")
const contenedorDetails = document.getElementById("contenedorDetails");


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
export function filtrarPorTexto(arrayEvents) {
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
            // console.log(card);
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




export function crearDetails(arrayEvents) {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");
    arrayEvents.find(evento => {
        if (evento.name === name) {
            console.log(evento);
            let card = document.createElement("div");
            card.classList.add("card");
            card.style.width = "70rem";
            card.style.height = "25.7rem";

            card.innerHTML = `<div class="card-body gap-1 d-flex flex-row aling-items-center h-75">
                <img src="${evento.image}"  class="card-img-top h-100 w-75 " alt="...">
                <div class="card-body gap-1 d-flex flex-column justify-content-start h-75">
                <h5 class="card-title">${evento.name}</h5>
                <p class="card-text">${evento.description}</p>
                <p class="text-start d-flex"> <b>Category:</b> ${evento.category}</p>
                <p class="text-start d-flex"><b>Place:</b> ${evento.place}</p>
                <p class="text-start d-flex"><b>Capacity:</b> ${evento.capacity}</p>
                <p class="text-start d-flex"><b>Assistance:</b> ${evento.assistance}</p>
                <p class="text-start d-flex"><b>Price:</b> $${evento.price}</p>
                </div>
            </div>`;
            contenedorDetails.appendChild(card);

        }


    })


}




// export function superFiltro(arrayEvents) {
//     let filtro1 = filtrarEventos(arrayEvents)
//     let filtro2 = filtrarPorTexto(filtro1)
//     crearCard(filtro2)
// }
// buscador.addEventListener("keyup", () => {
//     superFiltro(arrayEvent)

// })
// checkbox.addEventListener('change', () => {
//     superFiltro(arrayEvent)
// })


export function superFiltro(arrayEvents) {
    let filtro = filtrarEventos(arrayEvents)
    let filtro2 = filtrarPorTexto(filtro)
    console.log(filtro2);
    crearCard(filtro2)
}
