# Aplicación construída con React, Redux y Tailwindcss

## Puedes verlo en vivo, [aquí](https://tastypie.netlify.app/).

### ¿Que he aprendido de Redux?

##### Redux consiste de 3 elementos fundamentales:
Tienda:

El estado completo de una aplicación en redux vive in un solo lugar, la tienda.

` initialState => { ... }`

The initial state of this application.
El estado inicial de esta aplicación.

```
{
 cartMeals: []
 mealList: {
  isFetching: false,
  meals: [],
  mealSearchId: null,
  visibilityAll: "ALL"
  }
};
```

Acciones:

La única manera de actualizar la tienda es emitiendo acciones.
Son funciones que devuelven un objeto javascript plano, con el tipo de acción y normalmente un payload para obtener algunos datos.

`action () => { type: "", payload: "", ... }`

Creador de acción para agregar un postre al carrito de compras

```
function add(dessert) {
  return {
    type: ADD_TO_CART,
    payload: dessert
  };
}      
```
Reductores:

La comunicación entre la tienda y las acciones, es a través de los reductores, son funciones puras que toman como argumentos, el estado anterior y la acción y luego devuelven el nuevo estado, en consecuencia no deben modificar el estado anterior, sino devolver un nuevo objeto con el nuevo estado.

`reducer (previousState, action) => newState `

Reductor que gestiona el estado del carrito de la compra.

```
function cartMeals(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return setCart(state, action.payload);
    ...
    default:
      return state;
  }
}
```

### ¿Como se manejan los procesos asíncronos en Redux?

Redux por sí solo es capaz de enviar acciones síncronas, usted envía una acción y el estado se actualiza inmediatamente.

Actualmente, la mayoría de las aplicaciones o sitios web requieren datos externos, por ejemplo, llamadas a API para solicitar datos y mostrarlos en nuestro sitio web.

Estas llamadas a la API se realizan de forma asincrónica, cuando se realiza este proceso (solicitud), hay dos momentos determinantes en la ejecución. El momento en que se inicia la llamada y el momento en que recibe una respuesta, como sabemos, esta respuesta en una solicitud asincrónica es indeterminada (tiempo de espera).

Estos momentos requieren un cambio de estado en la aplicación. Necesitamos enviar acciones normales (sincrónicas) a los reductores para informarles de que está sucediendo.

- Una acción que informa a los reductores que comenzó la solicitud.

- Una acción que informa a los reductores que la solicitud finalizó correctamente.

- Una acción que informa a los reductores que la solicitud falló

Para manejar solicitudes de red con acciones asincrónicas, necesitamos un middleware, en este caso estoy usando "Middleware Redux Thunk" como estándar.

Con este middleware, un creador de acciones puede devolver una función en lugar de un objeto de acción. Esta función devuelta será ejecutada por el middleware, ya que no necesita ser pura, podemos tener efectos secundarios como llamadas a API asíncronas, así como enviar acciones síncronas.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
