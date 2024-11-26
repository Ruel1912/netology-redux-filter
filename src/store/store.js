import { combineReducers, compose, legacy_createStore } from 'redux';
import serviceListReducer from './reducers/serviceListReducer';
import serviceFormReducer from './reducers/serviceFormReducer';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = legacy_createStore(
  combineReducers({
    serviceList: serviceListReducer,
    serviceForm: serviceFormReducer,
  }),
  compose(ReactReduxDevTools)
)

export default store