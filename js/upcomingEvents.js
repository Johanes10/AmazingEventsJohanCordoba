import { urlApi, pintarChecks, filtrarEventos, crearCardUpcoming, superFiltro } from "../modules/funciones.js";

fetch(urlApi).then(respuesta => respuesta.json()).then(data => {
    console.log(data);
    const events = data.events
    pintarChecks(events)
    filtrarEventos(events)
    crearCardUpcoming(events)
    superFiltro(events)
    buscador.addEventListener("keyup", () => {
        superFiltro(events)

    })
    contenedorCheckbox.addEventListener('change', () => {
        superFiltro(events)
    })
})