import React, {useEffect, createContext} from 'react';
import "../css/App.scss";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import ToDonesContainer from './ToDonesContainer';
import Help from "./Help";
import {HashRouter,Switch,Route} from "react-router-dom";
import NotFound from './NotFound';
import {connect} from "react-redux";

export const MyContext = createContext(null);

function App({dispatch, state}) {


  //Local Storage
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

  /* the same
  const MapsStateToProps = (state) => ({state})
  export default connect(MapsStateToProps) (App)
  */
  export default connect((state) =>({state}) )(App)
