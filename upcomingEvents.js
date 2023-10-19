const upcoming = document.getElementById("contenedorUpcomingEvents")
const events = data.events

for (let event of events) {
    if (event.date >= "2023-01-01") {
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
        upcoming.appendChild(card)
    }
}
