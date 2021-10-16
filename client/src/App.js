import React, { useState, useEffect } from "react"
import { createUser, readUsers } from './utils/api';
import { Switch, Route } from "react-router-dom"
import Home from "./home";
import Signup from "./accounts/signup";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/accounts/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
