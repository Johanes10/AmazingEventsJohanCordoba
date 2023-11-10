import { urlApi, pintarChecks, filtrarEventos, crearCard, superFiltro } from "../modules/funciones.js";

fetch(urlApi).then(respuesta => respuesta.json()).then(data => {
  // console.log(data);
  const events = data.events
  pintarChecks(events)
  filtrarEventos(events)
  crearCard(events)
  superFiltro(events)

  buscador.addEventListener("keyup", () => {
    superFiltro(events)

  })
  contenedorCheckbox.addEventListener('change', () => {
    superFiltro(events)
  })
})