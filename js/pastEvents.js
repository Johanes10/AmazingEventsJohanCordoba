import { urlApi, pintarChecks, filtrarEventos, crearCardPast, superFiltroPast } from "../modules/funciones.js";

fetch(urlApi).then(respuesta => respuesta.json()).then(data => {
    // console.log(data);
    const events = data.events
    pintarChecks(events)
    filtrarEventos(events)
    crearCardPast(events)
    superFiltroPast(events)

    buscador.addEventListener("keyup", () => {
        superFiltroPast(events)

    })
    contenedorCheckbox.addEventListener('change', () => {
        superFiltroPast(events)
    })
})