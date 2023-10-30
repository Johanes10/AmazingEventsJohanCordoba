const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");
const events = data.events;
let eventoEncontrado = events.find(evento => evento.name == name);
const contenedorDetails = document.getElementById("contenedorDetails");

function crearCard(evento) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "30rem";
    card.innerHTML = `
      <img src="${evento.image}"  class="card-img-top h-50" alt="...">
      <div class="card-body gap-1 d-flex flex-column justify-content-center">
        <h5 class="card-title">Nombre: ${evento.name}</h5>
        <p class="card-text">${evento.text}</p>
        <p class="text-start d-flex">Phone: ${evento.phone}</p>
        <p class="text-start d-flex">Email: ${evento.email}</p>
        <p class="text-start d-flex">Postal Zip: ${evento.postalZip}</p>
        <p class="text-start d-flex">Country: ${evento.country}</p>
      </div>
  `;
    contenedorDetails.appendChild(card);
}

crearCard(eventoEncontrado);
