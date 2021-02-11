import data from "../data-price/data-price.json";

export const REQUEST_MEALS = "REQUEST_MEALS";
export const RECEIVE_MEALS = "RECEIVE_MEALS";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const MEAL_SEARCH = "MEAL_SEARCH";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_MEAL = "DELETE_MEAL";
export const QUANTITY = "QUANTITY";
export const UPDATE_QTY = "UPDATE_QTY";
export const ERROR_FETCH = "ERROR_FETCH";

export function requestMeals() {
  return {
    type: REQUEST_MEALS,
  };
}

export function receiveMeals(json) {
  return {
    type: RECEIVE_MEALS,
    payload: json.meals.map((meal) => meal),
  };
}

export function errorFetch(error) {
  return {
    type: ERROR_FETCH,
    payload: error,
  };
}

function makeActionCreator(type, ...argNames) {
  return function (...args) {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

export const setQty = makeActionCreator(QUANTITY, "qty", "id");
export const addToCart = makeActionCreator(ADD_TO_CART, "mealObj");
export const updateQty = makeActionCreator(UPDATE_QTY, "qty", "id");
export const deleteCartMeal = makeActionCreator(DELETE_MEAL, "id");
export const filterByPrice = makeActionCreator(FILTER_BY_PRICE, "filter");
export const mealSearch = makeActionCreator(MEAL_SEARCH, "searchText");

// He aqui nuestro primer creador thunk action!
// Aunque internamente son diferentes, lo usarás como cualquier otro creador de acción:
// store.dispatch(fetchPosts('reactjs'))

// export function fetchMeals() {
//   // Thunk middleware sabe como manejar funciones.
//   // Pasa el método de despacho como un argumento a la función,
//   // haciéndolo así capaz de despachar las acciones por sí mismo.
//   return async function (dispatch) {
//     // Primer envío: se actualiza el estado de la aplicación para informar
//     // que la llamada a la API está iniciando.
//     dispatch(requestMeals());
//     // La función llamada por el middleware thunk puede devolver un valor,
//     // que se transmite como el valor de retorno del método de envío.

//     // En este caso, devolvemos una promesa para esperar por la respuesta.
//     // Esto no es requerido por middleware thunk, pero es conveniente para nosotros.

//     // ¡Podemos despachas muchas veces!
//     // Aquí, actualizamos el estado de la aplicación con los resultados de la llamada a la API.

//     try {
//       const res = await Promise.resolve(data);
//       return dispatch(receiveMeals(res));
//     } catch (error) {
//       return dispatch(errorFetch(error))
//     }
//     // En una aplicación del mundo real, también
//     // capturamos cualquier error en la llamada de red.
//   };
// }

export const fetchMeals = () => async (dispatch) => {
  dispatch(requestMeals());

  try {
    const res = await Promise.resolve(data);
    return dispatch(receiveMeals(res));
  } catch (error) {
    return dispatch(errorFetch(error));
  }
};
