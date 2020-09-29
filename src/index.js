import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./css/index.css";
import {Reducer} from "./components/Reducer"
import {createStore} from "redux"
import {Provider} from "react-redux"

const store = createStore(Reducer)

ReactDOM.render(
<Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
  
);


