const contenedor = document.getElementById("contenedorCards")
// const titulo = document.createElement("h1")
// titulo.innerHTML = "Hola Johan"
// contenedor.appendChild(titulo)
const checkbox = document.getElementById("contenedorCheckbox")
const events = data.events

let category = []
category = Array.from(new Set(events.map(evento => evento.category.replace(" ", "-"))))
console.log(category);

function filtrarEventos(arrayEvents) {
  let checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value)

  // let usuariosFiltrados = []
  if (checked.length > 0) {
    return arrayEvents.filter(evento => checked.includes(evento.category))
  } return arrayEvents
}
function filtrarPorTexto(arrayEvents) {
  return arrayEvents.filter(evento => evento.name.toLowerCase().includes(buscador.value.toLowerCase()))
}



{/* <div class="card" style="width: 18rem;">
<img src="./Recursos_Amazing_Events_Task_1/books.jpg" class="card-img-top" alt="Books Event">
<div class="card-body">
  <h5 class="card-title">Book Fair</h5>
  <p class="card-text text-truncate">Explore a world of literature at our Book Fair. Discover new stories and authors.</p>
  <div class="d-flex justify-content-between">
    <p>$5</p>
    <a href="#" class="btn btn-outline-dark">Details</a>
  </div> */}
function crearCard(arrayEvents) {
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

{/* <div id="contenedorCheckbox" class="d-flex justify-content-center gap-1 flex-wrap"></div> */ }

function pintarChecks(arrayCategory) {
  arrayCategory.forEach(categorys => {
    const checkbox = document.createElement("div");
    checkbox.classList.add("form-check");
    checkbox.innerHTML = `
     
      <input class="form-check-input" type="checkbox" id=${categorys} value=${categorys}>
      <label class="form-check-label" for=${categorys}>${categorys.replace("-", " ")}</label>
    `;
    contenedorCheckbox.appendChild(checkbox);
    console.log(pintarChecks)

  });
}

pintarChecks(category);
crearCard(events);
console.log(crearCard)

function superFiltro(arrayEvents) {
  let filtro1 = filtrarEventos(arrayEvents)
  let filtro2 = filtrarPorTexto(filtro1)
  crearCard(filtro2)
}
buscador.addEventListener("keyup", () => {
  superFiltro(events)

})
contenedorCheckbox.addEventListener('change', () => {
  superFiltro(events)
})