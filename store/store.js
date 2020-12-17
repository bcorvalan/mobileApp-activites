import loginReducer from './reducers/LoginReducers';
import {createStore, combineReducers } from "redux";

export default createStore(
    combineReducers({
        login: loginReducer
    })
  );
  