const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");
const events = data.events;
let eventoEncontrado = events.find(evento => evento.name == name);
const contenedorDetails = document.getElementById("contenedorDetails");

function crearCard(evento) {
  const card = document.createElement("div");
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
  </div>
`;
  contenedorDetails.appendChild(card);
}

crearCard(eventoEncontrado);
