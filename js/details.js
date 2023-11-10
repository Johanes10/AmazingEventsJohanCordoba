import { crearDetails, urlApi } from "../modules/funciones.js";


fetch(urlApi).then(response => response.json()).then(data => {
  const events = data.events
  console.log("Johanes");
  console.log(events);
  crearDetails(events)

})