import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import loginReducer from './store/reducers/LoginReducers';
import {createStore, combineReducers } from "redux";
import { Provider } from 'react-redux'

const rootReducer = combineReducers ({
  login: loginReducer
})
const store = createStore(rootReducer)

export default function App() {
  return (
  <Provider store={store}> <AppNavigator/> </Provider> 
  );
}