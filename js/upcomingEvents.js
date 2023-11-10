import { urlApi, pintarChecks, filtrarEventos, crearCardUpcoming, superFiltro } from "../modules/funciones.js";

fetch(urlApi).then(respuesta => respuesta.json()).then(data => {
    console.log(data);
    const arrayEvents = data.events
    pintarChecks(arrayEvents)
    filtrarEventos(arrayEvents)
    crearCardUpcoming(arrayEvents)
    superFiltro(arrayEvents)
})