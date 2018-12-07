import {createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'


const initialState = {};

export default function configureStore(){
  return createStore(
    rootReducer,
    initialState,

    // This checks the environment. If it is 'production', then redux dev tools are disabled
    // Have only tested by changing 'production' to 'development' and confirmed it was disabled in my dev environment
  compose(
    applyMiddleware(thunk),
      process.env.NODE_ENV !== 'production' &&
      window.__REDUX_DEVTOOLS_EXTENSION__ 
      ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    )
  );
}