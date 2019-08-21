import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "./components/Login/Login.js";
import { Signup } from "./components/Signup/Signup.js";
import { PrivateRoute } from "./components/PrivateRoute.js";
import {Stock } from "./components/Dashboard/Stock.js";
import {Mouvement } from "./components/Dashboard/Mouvement.js";
import {Fournisseur } from "./components/Dashboard/Fournisseur.js";
import {AjoutS } from "./components/Dashboard/stock/AjoutS.js";
import {EditS } from "./components/Dashboard/stock/EditS.js";


import { Acceuil } from "./components/componentsExt/Acceuil";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <Switch>
            <Route exact path="/" component={Acceuil} />
            <Route exact path="/connecter" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute path="/stock" component={Stock} />
            <PrivateRoute path="/mouvement" component={Mouvement} />
            <PrivateRoute path="/fournisseur" component={Fournisseur} />
            <PrivateRoute path="/ajoutStock" component={AjoutS} />
            <PrivateRoute path="/editStock" component={EditS} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
