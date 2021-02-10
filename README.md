# Application built with React, Redux and Tailwindcss

### ¿What have I learned from Redux?

##### Redux consists of 3 fundamental elements:

Store:

` initialState => { ... }`

The entire state of an application in redux lives in one place, the store

Actions:

`action () => { type: "", payload: "", ... }`

The only way to update the store is by issuing shares.
They are functions that return a flat javascript object, with the type of action and usually a payload to obtain some data.

Reducers:

`reducer (previousState, action) => newState `

The communication between the store and the actions, is through the reducers, they are pure functions that take as arguments, the previous state and the action and then return the new state, consequently they should not modify the previous state, but return a new one object with the new state

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
