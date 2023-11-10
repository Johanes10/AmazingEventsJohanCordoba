import { urlApi, pintarChecks, filtrarEventos, crearCardPast, superFiltro } from "../modules/funciones.js";

fetch(urlApi).then(respuesta => respuesta.json()).then(data => {
    console.log(data);
    const arrayEvents = data.events
    pintarChecks(arrayEvents)
    filtrarEventos(arrayEvents)
    crearCardPast(arrayEvents)
    superFiltro(arrayEvents)
    buscador.addEventListener("keyup", () => {
        superFiltro(arrayEvents)

    })
    contenedorCheckbox.addEventListener('change', () => {
        superFiltro(arrayEvents)
    })
})