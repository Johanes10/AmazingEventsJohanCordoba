import { urlApi, pintarChecks, filtrarEventos, crearCardUpcoming, superFiltroUpcoming } from "../modules/funciones.js";

fetch(urlApi).then(respuesta => respuesta.json()).then(data => {
    // console.log(data);
    const events = data.events
    pintarChecks(events)
    filtrarEventos(events)
    crearCardUpcoming(events)
    superFiltroUpcoming(events)

    buscador.addEventListener("keyup", () => {
        superFiltroUpcoming(events)

    })
    contenedorCheckbox.addEventListener('change', () => {
        superFiltroUpcoming(events)
    })
})