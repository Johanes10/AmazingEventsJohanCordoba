const contenedor = document.getElementById("contenedorCards")
// const titulo = document.createElement("h1")
// titulo.innerHTML = "Hola Johan"
// contenedor.appendChild(titulo)
const events = data.events


{/* <div class="card" style="width: 18rem;">
<img src="./Recursos_Amazing_Events_Task_1/books.jpg" class="card-img-top" alt="Books Event">
<div class="card-body">
  <h5 class="card-title">Book Fair</h5>
  <p class="card-text text-truncate">Explore a world of literature at our Book Fair. Discover new stories and authors.</p>
  <div class="d-flex justify-content-between">
    <p>$5</p>
    <a href="#" class="btn btn-outline-dark">Details</a>
  </div> */}
for (let event of events) {
  const card = document.createElement("div")
  card.classList.add("card")
  card.style.width = "18rem"
  card.innerHTML = `<img src=${event.image} class="card-img-top h-50" alt="Books Event">
                                <div class="card-body">
                                <h5 class="card-title">${event.name}</h5 >
                                <p class="card-text text-truncate">${event.description}</p>
                                <div class="d-flex justify-content-between">
                                <p>$${event.price}</p>
                                <a href="#" class="btn btn-outline-dark">Details</a>`
  contenedor.appendChild(card)
}