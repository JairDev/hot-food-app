# Application built with React, Redux and Tailwindcss

## You can see it live, [here](https://tastypie.netlify.app/).

### ¿What have I learned from Redux?

##### Redux consists of 3 fundamental elements:

Store:

The entire state of an application in redux lives in one place, the store

` initialState => { ... }`

The initial state of this application.

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

Actions:

The only way to update the store is by issuing shares.
They are functions that return a flat javascript object, with the type of action and usually a payload to obtain some data.

`action () => { type: "", payload: "", ... }`

Action creator to add a dessert to the shopping cart.

```
function add(dessert) {
  return {
    type: ADD_TO_CART,
    payload: dessert
  };
}      
```

Reducers:

The communication between the store and the actions, is through the reducers, they are pure functions that take as arguments, the previous state and the action and then return the new state, consequently they should not modify the previous state, but return a new one object with the new state

`reducer (previousState, action) => newState `

Reducer that manages the status of the shopping cart

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

##### ¿How are asynchronous processes handled in Redux?

Redux by itself is only capable of dispatching synchronous actions, you send an action and the status is updated immediately.

Currently most applications or websites require external data, for example API calls to request data and display it on our website.

These API calls are made asynchronously, when this process (request) is made, there are two determining moments in the execution. The moment the call is started and the moment you receive a response, as we know this response in an asynchronous request is indeterminate (timeout).

These moments require a state change in the application. We need to send normal (synchronous) actions to the reducers to inform them that it is happening.

- An action informing the reducers that the request started

- An action informing the reducers that the request ended correctly

- An action that informing the reducers that the request failed

To handle network requests with asynchronous actions, we need a middleware, in this case I am using "Middleware Redux Thunk" as standard.

Using this middleware, an action creator can return a function in place of an action object. This returned function will be executed by the middleware, as it does not need to be pure, we can have side effects such as asynchronous API calls, as well as send synchronous actions.

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
