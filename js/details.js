import { crearDetails, url } from "./modules/funciones.js";


fetch(url).then(response => response.json()).then(data => {
  const products = data.products
  console.log(products);
  crearDetails(products)

})