import React, {useState, useEffect, useReducer} from 'react';
import {Reducer} from "./Reducer";
import "../css/App.scss";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import ToDonesContainer from './ToDonesContainer';
import Help from "./Help";
import {HashRouter,Switch,Route} from "react-router-dom";
import NotFound from './NotFound';
import {connect} from "react-redux";

export const MyContext = React.createContext(null);


function App({dispatch, state}) {

console.log(state);
  useEffect(() => {
    let storedItems = localStorage.getItem("to-do-app");
    let convertedToOriginal = JSON.parse(storedItems);
    if(storedItems !== null) {
      dispatch({type: "localStorage", payload: convertedToOriginal})
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("to-do-app", JSON.stringify(state))
  }, [state])


  
  
  /* const updateItem = (id) => {
      const updatedItems = items.map(item => {
        if (item.id === id) {
          item.done = !item.done
          return item
        } else {
          return item
        }
      })
      setItems(updatedItems) 
    }

  const AddItem = (InputText) => {
      const item = {
        id: items.length,
        text: InputText,
        done: false
      }
    setItems([item, ...items])
    }

    
  const deleteItem = (id) => {
      const updatedItem = items.filter(item =>  item.id !== id)
      setItems(updatedItem) 
  } */
  

    
    return (
     
      <HashRouter>
        <div className="app">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <ToDosContainer />
              <ToDonesContainer />
            </Route>
            <Route exact path="/help" component={Help} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
      
    )
  }

  export default connect((state) =>({state}) )(App)


