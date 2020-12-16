import data from "../data-price/data-price.json"

export const REQUEST_MEALS = "REQUEST_MEALS"
export const RECEIVE_MEALS = "RECEIVE_MEALS"
export const FILTER_BY_PRICE = "FILTER_BY_PRICE"

export function requestMeals() {
  return {
    type: REQUEST_MEALS,
  }
}

export function receiveMeals(json) {
  return {
    type: RECEIVE_MEALS,
    payload: json.meals.map(meal => meal)
  }
}

export function filterByPrice(filter) {
  return {
    type: FILTER_BY_PRICE,
    payload: filter
  }
}

// He aqui nuestro primer creador thunk action!
// Aunque internamente son diferentes, lo usarás como cualquier otro creador de acción:
// store.dispatch(fetchPosts('reactjs'))

export function fetchMeals() {
  // Thunk middleware sabe como manejar funciones.
  // Pasa el método de despacho como un argumento a la función,
  // haciéndolo así capaz de despachar las acciones por sí mismo.
  return function(dispatch) {
    // Primer envío: se actualiza el estado de la aplicación para informar
    // que la llamada a la API está iniciando.
    dispatch(requestMeals())
    // La función llamada por el middleware thunk puede devolver un valor,
    // que se transmite como el valor de retorno del método de envío.

    // En este caso, devolvemos una promesa para esperar por la respuesta.
    // Esto no es requerido por middleware thunk, pero es conveniente para nosotros.
    // return fetch(data)
      // .then(res => console.log(res.json))
        // ¡Podemos despachas muchas veces!
        // Aquí, actualizamos el estado de la aplicación con los resultados de la llamada a la API.

      // .then(json => dispatch(receiveMeals(json)))
      // En una aplicación del mundo real, también
      // capturamos cualquier error en la llamada de red.
      return Promise.resolve(data)
        .then(res => dispatch(receiveMeals(res)))
  }
}   